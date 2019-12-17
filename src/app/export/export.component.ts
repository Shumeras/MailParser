import { Component, OnInit } from '@angular/core';
import { ParsedData } from 'src/dataClasses/parsedData';
import { DataService } from '../services/data.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  pageIsLoading: boolean;

  parsed : ParsedData[] = [];
  selectedData: ParsedData;

  constructor(private dataService: DataService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  deleteSelectedData(data : ParsedData) : void
  {
    if(this.selectedData == data)
      this.selectedData = null;
    
    this.parsed.splice(this.parsed.indexOf(data), 1);
    
    // Doing this so list updates due to virtual scroll bug
    this.parsed = [...this.parsed];
    DataService.parsedData = this.parsed;
  }

  parseData(): void
  {
    if(DataService.conditionsData.length < 1)
    {
      this.snackBar.open("Missing conditions data to parse","Ok")
      return;
    }  
    
    if(DataService.emailData.length < 1)
    {
      this.snackBar.open("Missing email data to parse","Ok");
    }

    this.pageIsLoading = true;

    DataService.parsedData = ParsedData.buildParsedData(DataService.emailData, DataService.conditionsData);
    this.parsed = DataService.parsedData;
    
    this.pageIsLoading = false;

    this.selectedData = null;
  }

  exportData(): void
  { 
    this.pageIsLoading = true
    
    DataService.exportParsedData();
    this.pageIsLoading = false;
  }
  
  saveData(): void
  {
    DataService.saveParsedData();
  }

  loadData(file :FileList = null): void
  {
    this.pageIsLoading = true;
    let fr = new FileReader();
      fr.onload =
      () =>
      {
        if(DataService.loadParsedData(fr.result as string))
        {
          this.parsed = DataService.parsedData;
        }
        this.pageIsLoading = false;
      }
      fr.readAsText(file[0], 'utf-8');
  }
}
