//기본 전략 : 각 점들을 y축 위아래로 움직이게 한 뒤, 
//그 점들을 연결한다.

export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //y축 고정, 위아래 움직임
        this.fixedY = y;
        this.speed = 0.1; 
        this.max = Math.random() * 100 + 150;
    }
    update() {
        this.cur += this.speed;
        this.y = this.fixedY  +  (Math.sin(this.cur) * this.max);
    }
}