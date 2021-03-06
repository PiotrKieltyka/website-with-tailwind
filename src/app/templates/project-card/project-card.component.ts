import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-project-card',
  template: `
    <ng-container>
      <h2
        [ngClass]="index % 2 !== 0 ? 'text-right pr-4' : 'text-left pl-4'"
        class="text-lg font-medium text-slate-600"
      >
        {{ title }}
      </h2>
      <hr
        [ngClass]="index % 2 !== 0 ? 'self-end' : 'self-start'"
        class="border-white border-2 border-solid w-1/2"
      />
      <p class="text-base text-center font-normal text-slate-600 pl-4 w-11/12">
        {{ leadText }}
      </p>
      <ng-template [ngIf]="projectURL">
        <a
          href="{{ projectURL }}"
          class="w-5/6 sm:w-1/3 lg:w-1/2 h-10 my-4 grid justify-center items-center self-center text-slate-600 bg-white hover:shadow-md hover:shadow-slate-700 hover:bg-gradient-to-bl hover:from-slate-500 hover:to-slate-600 hover:text-white transition-all shadow-slate-300 shadow-inner rounded-lg"
        >
          <button class="text-sm md:text-base font-light">
            <i class="{{ buttonIcon }} px-2"></i>{{ buttonText }}
          </button>
        </a>
      </ng-template>
      <hr class="border-white border-1 border-solid w-full" />
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: [],
})
export class ProjectCardComponent {
  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() leadText: string = '';
  @Input() projectURL?: string = '';
  @Input() buttonIcon?: string = '';
  @Input() buttonText?: string = '';
}
