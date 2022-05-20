// 2
// Создать класс Device, который имеет параметр isOn (по умолчанию false),
// вызываемого абонента и метод switchDevice, который переключает параметр isOn. Позвонить абоненту можно только тогда, когда параметр isOn == true, иначе вывести сообщение, что звонок невозможен.

// .diagonal = ???;
// Необходимо также создать классы Smartphone(принимает имя и диагональ экрана(не может быть больше 8))
// метод callSmbd, который принимает имя

//  и Tablet(принимает имя и диагональ экрана (не может быть меньше 8)), которые наследуют от класса Device.
// .watchMovies(movieName)

class Device {
    #isOn = false;
  
    switchDevice() {
      this.#isOn = !this.#isOn;
    }
  
    getIsOn() {
      return this.#isOn;
    }
  }
  
  const kolonka = new Device();
  
  kolonka.switchDevice();
  console.log(kolonka);
  
  
  class Smartphone extends Device {
    constructor(name, diagonal) {
      super();
  
      this.name = name;
      if(diagonal <= 8) {
        this.diagonal = diagonal;  
      }
      else {
        throw new ValidationError("diagonal should be <= 8");
      }
    }
  
    callSomebody(subscriberName) {
      if(this.getIsOn()) {
        console.log(`call the subscriber ${subscriberName}`);
      } else {
        console.log('call not possible');
      }
    }
  }
  
  let smartphoneXiaomi;
  let smartphoneBQ;

  try {
    smartphoneXiaomi = new Smartphone("Xiaomi", 10);
  } catch(err) {
    console.log(err);
    smartphoneBQ = new Smartphone('BQ', 5);
  }
  
  console.log(smartphoneXiaomi);
  console.log(smartphoneBQ);
  smartphoneBQ.switchDevice();
  smartphoneBQ.callSomebody('Robert');
  
  
  class Tablet extends Device {
    constructor(name, diagonal) {
      super();
  
      this.name = name;
      if(diagonal >= 8) {
        this.diagonal = diagonal;
      } else {
        throw new ValidationError("diagonal should be >= 8");
      }
    }
  
    watchMovies(movieName) {
      if(this.getIsOn()) {
        console.log(`Start watching movie ${movieName}`);
      } else {
        console.log('Movie cannot be watched');
      }
    }
  }
  
  let tabletSamsung;
  let tabletIPad;
  
  try {
    tabletSamsung = new Tablet('Samsung', 7);
  } catch(err) {
    console.log(err);
    tabletIPad = new Tablet('iPad', 12);
  }

  console.log(tabletSamsung);
console.log(tabletIPad);
tabletIPad.switchDevice();
tabletIPad.watchMovies('Ghost busters');
