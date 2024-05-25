import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent { 

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: 'd',
    name: 'Trunk',
    power: 10
  }];

  

  onDeleteCharacte( id?: string ):void {
    //TODO: Emitir el ID del personaje
    if( !id ) return;
    this.onDelete.emit(id);
    //console.log(this.characterList[index])
  }
}
