import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlService } from 'src/app/servidor/url.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  msg: any
  cadastro: any
  nome: any
  senha: any
  email: any
  telefone: any
  dataNasc: any
  constructor(public formBuilder: FormBuilder, public http: HttpClient, public servidorUrl: UrlService, public nav: NavController) {
    this.cadastro = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNasc: ['', Validators.required]
    })
  }

  ngOnInit() {
    document.querySelector('ion-tab-bar').style.display = 'none'
  }

  cadUsuario() {
    if (this.nome === undefined || this.senha === undefined || this.email === undefined || this.telefone === undefined || this.dataNasc === undefined) {
      this.servidorUrl.Alerta("Atenção", "Preencha todos os campos")
    } else {
      this.dados(this.cadastro.value).subscribe(
        data => {
          this.msg = data
          if(this.msg.statusMsg === false){
            this.servidorUrl.Alerta("Atenção", this.msg.msg)
          }else{
            this.servidorUrl.Alerta("Atenção", this.msg.msg)
            location.href = "/tabs/pg/login"
          }
        },
        err => {
          console.log("Error", err)
        }
      )
    }
  }
  dados(dados) {
    let cabecalho = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    return this.http.post(`${this.servidorUrl.pegarUrl()}cadastro.php`, dados, {
      headers: cabecalho
    }).pipe(map((res) => { return res }))
  }
}
