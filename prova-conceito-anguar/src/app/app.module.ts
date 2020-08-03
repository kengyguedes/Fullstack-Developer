import { TotalService } from './navegacao/content/totalService';
import { ListService } from './navegacao/content/lista-produtos/listService';

import { ProdutoService } from './services/produtoService';
import { ClienteService } from './services/clienteService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './navegacao/menu/menu.component';
import { ContentComponent } from './navegacao/content/content.component';
import { ConsultaComponent } from './navegacao/consulta/consulta.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatFormFieldModule,
  matFormFieldAnimations,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { DropdownCadastroComponent } from './navegacao/menu/dropdown-cadastro/dropdown-cadastro.component';
import { DropdownPedidoComponent } from './navegacao/menu/dropdown-pedido/dropdown-pedido.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ListaProdutosComponent } from './navegacao/content/lista-produtos/lista-produtos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AutoCompliteProdComponent } from './navegacao/content/auto-complite-prod/auto-complite-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ConsultaComponent,
    DropdownCadastroComponent,
    DropdownPedidoComponent,
    ListaProdutosComponent,
    AutoCompliteProdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [HttpClient, ClienteService, ProdutoService, ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
