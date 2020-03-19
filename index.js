// objects and methods

first();

var a = 'Hello';
function first(){
    var b =' Hi';
    second();
    function second(){
        var c = ' howdy'
        console.log(a+b+c);
    }
}

var mack = {
    firstName:'Mackeron',
    lastName:'Abiba',
    birthYear:1991,
    family: ['Jane','Jack','Robert','Emilia'],
    job:'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
}


var tom = {
    fullname: "Tom Brady",
    weight: 110,
    height: 6.2,
    calcBmi: function(){
        this.bmi = this.weight/(this.height*this.height);
        return this.bmi
    }
}

var jack = {
    fullname: "Jack sparrow",
    weight: 102,
    height: 5.9,
    calcBmi: function(){
        this.bmi = this.weight/(this.height*this.height);
        return this.bmi
    }
}

if(jack.calcBmi()>tom.calcBmi()){
    console.log("Jack has higher BMI of "+jack.bmi+" when compared to Tom who has a BMI of "+tom.bmi);
} else if (jack.calcBmi()<tom.calcBmi()){
    console.log("Tom has a higher BMI of "+tom.bmi+" when compared to Jack who has a BMI of "+jack.bmi)
} else {
    console.log("Tom and Jack have the same BMI")
}