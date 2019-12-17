import { Component, OnInit, ViewChild } from '@angular/core';
import { Condition } from 'src/dataClasses/condition';
import { EmailService } from '../services/email.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {

  startupPage: boolean = true;
  pageIsLoading: boolean;

  selectedCondition: Condition = null;
  conditions: Condition[];

  constructor() { }

  startup(file :FileList = null) : void
  {
    if(!this.startupPage)
      return;
    
    this.pageIsLoading = true;
    
    if(file != null)
    {
      let fr = new FileReader();
      fr.onload =
      () =>
      {
        if(DataService.loadConditionsData(fr.result as string))
        {
          this.conditions = DataService.conditionsData;
          this.startupPage = false;
        }
        this.pageIsLoading = false;
      }
      fr.readAsText(file[0], 'utf-8');
    }
    else
    {
      DataService.conditionsData = [];
      this.conditions = DataService.conditionsData;
      //this.testConditions();
      this.pageIsLoading = false;
      this.startupPage = false;
    }
  }


  createNewCondition(): void
  {
    this.selectedCondition = new Condition();
    this.selectedCondition.name = Date.now().toString();
    this.selectedCondition.expression = "-";
    this.conditions = [...this.conditions, this.selectedCondition]
    DataService.conditionsData = this.conditions;
  }

  deleteSelectedCondition(c : Condition)
  {
    if(this.selectedCondition == c)
      this.selectedCondition = null;
    
    this.conditions.splice(this.conditions.indexOf(c), 1);
    
    // Doing this so list updates due to virtual scroll bug
    this.conditions = [...this.conditions];
    DataService.conditionsData = this.conditions;
  }

  exportConditions() : void
  {
    DataService.saveConditionsData();
  }

  updateCurrentConditionExpression(): void
  {
    Condition.setExpression(this.selectedCondition, this.selectedCondition.expression);
  }

  ngOnInit() {}

}
