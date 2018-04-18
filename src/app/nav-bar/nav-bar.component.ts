import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  deckSaved: boolean;

  imgUrl: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOM'+
  'AAADeCAMAAAD4tEcNAAAAgVBMVEWCaTv///+AZjZ+ZDN9Yi9/ZTV9YzB7YCt6Xyl6Xi'+
  'f7+vj49vPz8e1/ZTJ5XSWDajve2M6un4WKckfp5d7Z0sbv7OeNd07DuKW7rpnIvq2Sf'+
  'VfNxLTk39aHb0KWgmDSyryfjW20po6llHaVgFyqmn6gjnC3qpS9sp+OeFOyo4meimjT3'+
  '1rPAAAVFklEQVR4nMVd2baqOBDFJIKAEFTECSf0TP7/BzaozKmkEvD2fum1+h6BnaHmV'+
  'KzJZ+Gv0yg+bBeX221fIkmWy+Nyf7rcr7s4Ws0//AkT61MP9tbp+e+ULI8kcBybEkKsD'+
  'giZUuYEfLnPNtH6U98x+QxHz093i0fCHPokxrvkWsj/lUyZe7xsI/8D31JgfI7R9ma7'+
  'BT05t96s2iHPNunonzMZm+PqkIWu3VuVWFAWBvfYG/WTJmNy9NPtnjOqN3sCnnS5XY3'+
  '2UU+MxXH9vWfMeAKb4ITxr8OYe3McjnE2Y5r7T4qpc7yOtzVH4LjaEnfwEu3BDvfx8G'+
  '97YihHP74QNja/F4h9GoflMI7eee/QzzDMwafBYwyWgzjGJ3cUMSNhGV6i/5NjtP8ww'+
  'yem4W0oS2OO0cNc1+uBOIthZrshx1VGxhelEDhLDv+co/fDPidpRCDOZYBjYsIxTpx/'+
  'yrAAdX+M7Vh9jvP7ODabLlhiqke0OcaJ/c82YhvE3ppNpS7HbfC/TOILM7Ndqcdxvf/'+
  '3O7EJys+f5ngOpmbfVgQ0aliq+AcM4lz116sOxy01WaeE2rOAH5P9KcfjdNsnyyMv4l'+
  'hTo1VvoEXwHL0vbf+Cspzc7b6J09Vq7nteMQWeP1+v0jQ6fz+WFmG29sqgS135iua4T'+
  'rQoEuoUMahYOujz6Ly9MN0AEJn9fIZjdNSwbAibJYsDdk1F20cRpsRvUe7+fYJjfMSO'+
  'NScsOG1TrXiMtz5kvzrmIbvrPB/H8exgKU5Zsk1NVPU8yiy8AcUuGq4IiuMuRL7aDoe'+
  'EJ9abZYidTLrEk8Rw3M4we4UT5/g9NDKaLjhyyRCCDtwhOP7ZGIbUPu3GCIrON0ivhn'+
  'DsklFzXDiIWST2JRorhj/fHjGjms8kkqSSY4YZVec4Viz0ifm3i1LGIS7So+DonxAvY'+
  '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'+
  '5HEerD5N74z9idUQSXivXqgAAAABJRU5ErkJggg==';


  constructor( private deckService: DeckListService ) { }

  ngOnInit() {
    const m = setInterval( m => {
        this.deckSaved = this.deckService.deckSaved;
      }
    , 1 );
  }

}
