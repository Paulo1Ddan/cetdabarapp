import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlService } from 'src/app/servidor/url.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.page.html',
  styleUrls: ['./alterar-dados.page.scss'],
})
export class AlterarDadosPage implements OnInit {
  msg: any
  alterarDados: any
  alterarSenha: any
  alterarImg: any

  nome: any
  email: any
  telefone: any
  dataNasc: any
  idUser: any

  idAntigo: any
  nameAntigo: any
  emailAntigo: any
  telAntigo: any
  dataNascAntigo: any
  imgAntigo: any
  statusAntigo: any
  catAntigo: any

  senhaAtual: any
  senhaNova: any

  file: any
  dadosUsuario: any;
  dados: Array <{
    idUsuario: any,
    nomeUsuario: any,
    emailUsuario: any,
    telUsuario: any,
    senhaUsuario: any,
    dataNasc: any,
    imgUsuario: any,
    dataCad: any,
    statusUsuario: any,
    catUsuario: any,
  }>
  constructor(public formBuilder: FormBuilder, public http: HttpClient, public servidorUrl: UrlService, public nav: NavController) { 
    this.pegarDados()
    this.alterarDados = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNasc: ['', Validators.required]
    })
    console.log(this.alterarDados)
    this.file = ""
  }

  selectedImage(e){
     this.file = e.target.files[0]
  }

  ngOnInit() {
  }

  pegarDados(){
    this.servidorUrl.setIdUser(localStorage.getItem('idUser'))
    this.servidorUrl.setNameUser(localStorage.getItem('nameUser'))
    this.servidorUrl.setEmailUser(localStorage.getItem('emailUser'))
    this.servidorUrl.setTelUser(localStorage.getItem('telUser'))
    this.servidorUrl.setDataNasc(localStorage.getItem('dataNasc'))
    this.servidorUrl.setImgUser(localStorage.getItem('imgUser'))
    this.servidorUrl.setStatusUser(localStorage.getItem('statusUser'))
    this.servidorUrl.setCatUser(localStorage.getItem('catUser'))
    
    this.idAntigo = this.servidorUrl.getIdUser()
    this.nameAntigo = this.servidorUrl.getNameUser()
    this.emailAntigo = this.servidorUrl.getEmailUser()
    this.telAntigo = this.servidorUrl.getTelUser()
    this.dataNascAntigo = this.servidorUrl.getDataNasc()
    this.statusAntigo = localStorage.getItem("statusUser") 
    this.catAntigo = localStorage.getItem("catUser")

    this.nome = this.nameAntigo
    this.email = this.emailAntigo
    this.telefone = this.telAntigo
    this.dataNasc = this.dataNascAntigo
  }

  async alterarDadosUser(){
    this.enviarDados(this.alterarDados.value).subscribe(
    data => {
      this.msg = data
      console.log(this.msg)
      if(this.msg.statusMsg){
        localStorage.setItem('nameUser', this.nome)
        localStorage.setItem('emailUser', this.email)
        localStorage.setItem('telUser', this.telefone)
        localStorage.setItem('dataNasc', this.dataNasc)
        this.servidorUrl.setNameUser(localStorage.getItem('nameUser'))
        this.servidorUrl.setEmailUser(localStorage.getItem('emailUser'))
        this.servidorUrl.setTelUser(localStorage.getItem('telUser'))
        this.servidorUrl.setDataNasc(localStorage.getItem('dataNasc'))

        this.servidorUrl.Alerta("Atenção", this.msg.msg)
        location.href = '/tabs/pg/perfil'
      }else{
        this.servidorUrl.Alerta("Atenção", this.msg.msg)
        
      }
    }, err=>{
      console.log(err)
    })
  }


  enviarDados(dados){
    let cabecalho = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    return this.http.post(`${this.servidorUrl.pegarUrl()}alterarDados.php?idUser=${this.idAntigo}`, dados, {
      headers: cabecalho
    }).pipe(map((res)=>{ return res}))
  }

  alterarSenhaUser(){
    if(this.senhaAtual === undefined || this.senhaNova === undefined){
      this.servidorUrl.Alerta("Atenção", "Preencha todos os campos")
    }else{
      this.alterarSenha = {
        value: {
          senhaAtual: this.senhaAtual,
          senhaNova: this.senhaNova
        }
      }
      console.log(this.alterarSenha)
      this.enviarDados(this.alterarSenha.value).subscribe(
        data=>{
          console.log(data)
        }, err => {
          console.log(err)
        }
      )
    }
  }

  alterarImagemUser(){
    console.log(this.file)
    const formData = new FormData()
    formData.append('img', this.file)
    console.log(formData)
    this.enviarDados(formData).subscribe(
      (data) => {
        console.log(data)
        console.log(formData)
      }, err =>{
        console.log(err)
        console.log(formData)
      }
    )
  }
}
