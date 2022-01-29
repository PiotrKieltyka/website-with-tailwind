import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-link-follow-copy',
  template: `
    <div class='text-xs font-light w-3/4 md:w-1/4 h-8 my-4 mt-4 flex items-center justify-evenly bg-white hover:shadow-xs hover:shadow-indigo-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-emerald-400 hover:text-white hover:font-normal transition-all shadow-inner shadow-indigo-300 rounded-lg'
      data-aos='flip-up' data-aos-duration='300' data-aos-delay='650'>
      <a href='{{ url }}' target='_blank' rel='noopener noreferrer'>Go to</a>
      <span (click)='copyUrlToClipboard()' class='cursor-copy active:text-pink-400'>Copy</span>
    </div>
  `,
  styles: []
})
export class LinkFollowCopyComponent {
  @Input() url: string = '';

  copyUrlToClipboard() {
    navigator.clipboard.writeText(this.url);
  }
}
