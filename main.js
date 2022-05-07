function task1(){
    task=["Brush Your Teeth For 2 Minutes","Act Like a Monkey For 30 Seconds","Walk On Your Knees","Stand On One Foot","Do 20 Pushups","Smell Your Used Socks","Say Whatever Your Friend Says","Rub Your Nose Like a Cat.","Laugh Like Santa","Make an Origami(paper) Boat","Make a Sandwich","Draw a Star In The Air","Do Exersize For 20 Minutes","Ask Someone a Stupid Question","Plant A Seed"];
    number = Math.floor(Math.random() * 15);
    document.getElementById("sim").innerHTML = "Simon Says: " + task[number];
}