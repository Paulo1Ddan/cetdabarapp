import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/servidor/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id: any
  name: any
  email: any
  tel: any
  dataNasc: any
  img: any
  status: any
  cat: any

  constructor(public servidorUrl: UrlService, public http: HttpClient, public nav: NavController) { 

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

    console.log(this.img)

  }

  ngOnInit() {
  }

}
