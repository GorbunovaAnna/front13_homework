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


// 3. Создать класс arrCommander, конструктор которого принимает массив чисел. Конструктор должен создавать
// метод getBiggerArr(), который принимает число и возвращает массив, где каждый элемент увеличен на это число и метод getCurrentArr(), который возвращает текущий массив.

class ArrCommander {
    constructor(arrNumber) {
      this.arrNumber = arrNumber;
      this.getBiggerArr = function(number) {
        const arrResults = arrNumber.map(num => num + number);
        return arrResults;
      }
      this.getCurrentArr = () => arrNumber;
    } 
  }
  
  const arrCommander1 = new ArrCommander([3, 45, 12, 63, 77]);
  console.log(arrCommander1);
  console.log(arrCommander1.getBiggerArr(1));
  console.log(arrCommander1.getCurrentArr());


  // 4
// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать еугольника должны быть меньше суммы длин остальных сторон.

class Line {
    constructor(startX, startY, endX, endY) {
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
    }
  
    calcLineLength = function() {
      const res = Math.sqrt(Math.pow(this.endY - this.startY, 2) + Math.pow(this.endX - this.startX, 2));
      return Math.round(res);
    }
  
    isTriangle = function(l1, l2, l3) {
      if(l1 < (l2 + l3)) {
        console.log('It is triangle');
      } else {
        console.log('It is not triangle');
      }
    }
  }

  const line1 = new Line(5, 6, 14, 12);
console.log(line1);
console.log(line1.calcLineLength());
line1.isTriangle(line1, line2, line3);

const line2 = new Line(7, 8, 10, 3);
console.log(line2);
console.log(line2.calcLineLength());

const line3 = new Line(12, 4, 8, 11);
console.log(line3);
console.log(line3.calcLineLength());