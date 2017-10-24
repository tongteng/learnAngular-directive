这个项目是为了学习指令
ng g d my-high-light 创建directive.ts文件
在directive文件中，声明自己的选择器
@Directive({
  selector: '[my-High-Light]'	
})

在html中把selector当做属性写进标签
<p [my-High-Light]="color" defaulthighLight="pink">我就是我，不一样的烟火</p>
<p my-High-Light>我就是我，不一样的烟火</p>
<p my-High-Light>我就是我，不一样的烟火</p>

不用[]是没传值的，用[]包起来是传值
用[]包起来的需要使用
@Input('my-High-Light') myHighLight:string;获取标签传进来的值

在constructor中声明el，el.nativeElement就是绑定指令的标签，可以通过js正常操作这个元素
constructor(private el: ElementRef) { 
    // this.el.nativeElement.style.backgroundColor = "#f60";
  }

绑定事件HostListener @HostListener('click') onclick() {...}
@HostListener('mouseenter') onmouseenter() {
	this.doHighLight(this.highLight || this.defaulthighLight || "red");
}

绑定class HostBinding	@HostBinding('class') myClass: string = 'myContent';
@HostBinding("class")
myClass: string = 'myContent';
在之后可以更改这个myClass

在这之前我们需要引入如下几个包
ElementRef, HostBinding, HostListener
