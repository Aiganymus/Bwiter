import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const re = new RegExp(/(^|\W)(#[a-z\d][\w-]*)/, 'gi');
    const match = value.match(re);
    if (!match) {
      return value;
    }
    const replacedValue = value.replace(re, '<span class="tag">' + match[0] + '</span>');
    return replacedValue;
  }

}
