import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, inputValue: any[], ...args: any[]) {
    // console.log('inputValue', inputValue);
    // console.log('value', value);

    if (!inputValue) {
      return value;
    }
    return value.filter((str:any) => {

      let match;
      let el;
      str.keywords.forEach(s => {
        match = s.match(new RegExp(`^${inputValue}`, 'gi'));
        if (match) {
          // console.log('match', s);
          el = str;
        }
      })

      let shortName = str.short_name.match(new RegExp(`^${inputValue}`, 'gi'));
      let name = str.short_name.match(new RegExp(`^${inputValue}`, 'gi'));
      //   console.log('str', str);
      //   console.log('strMatches', strMatches);
      return (el || name || shortName) ? true : false;
    });
  }

}
