import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;


  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
    const pValue = parseInt(value);
    !isNaN(pValue) ? this.length = pValue : this.length = 0;
  }

  validCharBoolGenerator() {
    let validCharacters = '';
    if(this.includeLetters){
      validCharacters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(this.includeNumbers){
      validCharacters += '0123456789';
    }
    if(this.includeSymbols){
      validCharacters += '!@#$%^&*()';
    }
    return validCharacters;
  }

  onButtonClick() {
    let validCharacters = this.validCharBoolGenerator();
    let password = '';
    for(let i = 0; i < this.length; i++){
      let index = Math.floor(Math.random() * validCharacters.length);
      password += validCharacters[index];
    }
    this.password = password;

  }
}
