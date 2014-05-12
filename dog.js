function Dog(name, sizeCategory){
  this.name = name;
  this.sizeCategory = sizeCategory;
}

Dog.prototype.bark = function(suffix) {
    suffix = suffix || '';
    var barkNoise = 'woof' + suffix;
    
    if(this.sizeCategory === 'large') {
        barkNoise = barkNoise.toUppercase();
    }
    alert(barkNoise);
}

fido = new Dog()
fido.bark('!')