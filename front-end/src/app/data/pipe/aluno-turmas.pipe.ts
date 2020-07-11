import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alunoTurmasFilter',
    pure: false
})
export class AlunoTurmasPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {

        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => Number(filter['idade']) >= item.idade_de && filter['idade'] <= Number(item.idade_ate) );
    }
}