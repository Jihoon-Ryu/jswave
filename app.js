class App {
    constructor() {
        this.canvas= document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        
        //대상.bind(X) : 대상의 this=>X로 바꾼다.
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        
        //requestAnimationFrame(반복할함수)
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        //clientWidth: 실제로 보여지는 크기
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        //캔버스 초기화
        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);       
        requestAnimationFrame(this.animate.bind(this));
    }
}