import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex = 0;
  images = [
    {
      imageSrc:"../../../../assets/images/image-14.jpg",
    },
    {
      imageSrc:"../../../../assets/images/image-15.jpg",
    },
    {
      imageSrc:"../../../../assets/images/image-16.jpg",
    }
  ]
  countDownDate = new Date("octubre 13, 2023 00:00").getTime();
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var _days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var _hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var _seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.days = _days;
    this.hours = _hours;
    this.minutes = _minutes;
    this.seconds = _seconds;

    if (distance <= 0) {
      clearInterval(this.x);
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  })

  autoSlideImages(): void {
    setInterval(() => { this.onNextClick() }, this.slideInterval);
  }

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}