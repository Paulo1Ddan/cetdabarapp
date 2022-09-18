import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/servidor/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id: any
  name: any
  email: any
  tel: any
  dataNasc: any
  img: any
  status: any
  cat: any

  teste: any = 1

  falseCondition: any

  dadosMatricula: any
  numMatriculas: any

  constructor(public servidorUrl: UrlService, public http: HttpClient, public nav: NavController) {
    this.servidorUrl.setIdUser(localStorage.getItem('idUser'));
    this.verificaLogin()
    this.trazerMatricula();
  }

  ngOnInit() {

  }

  verificaLogin(){
    if(localStorage.getItem('logado') != "true"){
      this.nav.navigateBack('/tabs/pg/login')
    }else{
      this.servidorUrl.setIdUser(localStorage.getItem('idUser'))
      this.servidorUrl.setNameUser(localStorage.getItem('nameUser'))
      this.servidorUrl.setEmailUser(localStorage.getItem('emailUser'))
      this.servidorUrl.setTelUser(localStorage.getItem('telUser'))
      this.servidorUrl.setDataNasc(localStorage.getItem('dataNasc'))
      this.servidorUrl.setImgUser(localStorage.getItem('imgUser'))
      this.servidorUrl.setStatusUser(localStorage.getItem('statusUser'))
      this.servidorUrl.setCatUser(localStorage.getItem('catUser'))

      this.id = localStorage.getItem("idUser")
      this.name = localStorage.getItem("nameUser")
      this.email = localStorage.getItem("emailUser")
      this.tel = localStorage.getItem("telUser")
      this.dataNasc = localStorage.getItem("dataNasc")
      this.status = localStorage.getItem("statusUser")
      this.cat = localStorage.getItem("catUser")
      this.img = localStorage.getItem("imgUser")

      this.img = this.servidorUrl.pegarUrl()+"assets/usuario/"+this.img


      if(this.status == 1) this.status = 'Ativo'
      if(this.status == 0) this.status = 'Inativo'
      if(this.cat == 1) this.cat = 'Aluno'
    }
  }

  trazerMatricula(){
    this.http.get(this.servidorUrl.pegarUrl() + "trazerMatricula.php?iduser="+this.id).pipe(map(res=> res)).subscribe(data =>{
      this.dadosMatricula = data

      this.numMatriculas = this.dadosMatricula.length;

      for(let i = 0; i < this.dadosMatricula.length; i++){
        switch(this.dadosMatricula[i].statusMatricula){
          case 1:
            this.dadosMatricula[i].statusMatricula = 'Aprovada'
          break;
          case 2:
            this.dadosMatricula[i].statusMatricula = 'Pendente'
          break;
        }
      }
    })
  }

  logout(){
    localStorage.clear()
    location.href = "/tabs/pg/login"
  }
}
