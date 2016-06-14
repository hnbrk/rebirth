import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionModel } from './question.model';

@Component({
  selector: 'question',
  providers: [QuestionService],
  directives: [],
  styles: [require('./question.scss')],
  template: require('./question.html')
})
export class Question implements OnInit {
  private questions: QuestionModel[] = [];
  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
    this.questionService.getQuestions()
      .subscribe(result => { this.questions = result; console.log(this.questions) });
  }
}