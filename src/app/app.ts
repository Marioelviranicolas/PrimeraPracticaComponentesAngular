import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componentes/navbar/navbar';
import { Footer } from './componentes/footer/footer';
import { Body } from './componentes/body/body';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Body],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('mi-proyecto');
}

