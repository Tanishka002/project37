class Question{
    constructor() {
      this.title = createElement("h1");
      this.question = createElement("h3");
      this.option1 = createElement("h3");
      this.option2 = createElement("h3");
      this.input1 = createInput("Enter the name");
      this.input2 = createInput("Enter the option number");
      this.button = createButton('Submit');
      }
      hide(){
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
      }

display(){

this.title.html("MyQuiz Game")
this.title.position(350, 0);

this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ")
this.question.position(150,80);

this.option1.html("1: Everyone ");
this.option1.position(150,100);

this.option2.html("2: Envelope");
this.option2.position(150,120);

this.input1.position(150,220);
this.input2.position(550,220);

this.button.position(400,300);

this.button.mousePressed(function(){
  this.input1.hide()
  this.input2.hide()
  this.button.hide()

 contestant.name = this.input.value();
  
contestantCount+=1;
contestant.index = contestantCount;
contestant.update()
contestant.updateCount(contestantCount);
 
});
}
}