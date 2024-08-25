import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusClass'
})

export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
       /*  if (status === 1) {
            return 'active'
        } if else (status === 2) {
            return 'partial'
        } else {
            return 'blockend'
        } */

        const obj: { [ key: number] : string } = {
            1: 'active',
            2: 'partial',
            3: 'blockend',
        }

        return obj[status]
    }
}