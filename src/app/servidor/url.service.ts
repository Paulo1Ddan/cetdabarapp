import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url: string = 'http://localhost/dabar/admin/';

  idUser: any;
  nameUser: any;
  emailUser: any;
  telUser: any;
  dataNasc: any;
  imgUser: any;
  dataCad: any;
  statusUser: any;
  catUser: any;
  constructor(public alerta: AlertController) {}

  pegarUrl(){
    return this.url;
  }

  async Alerta(titulo, mensagem){
    const alert = await this.alerta.create({
      cssClass: "alerta",
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    })
    await alert.present();
  }

  async AlertaOptions(titulo, mensagem, option){
    const alert = await this.alerta.create({
      cssClass: "alerta",
      header: titulo,
      message: mensagem,
      buttons: [
        {
          text: "Ok",
          role: "Ok",
          handler: ()=>{
            location.href=option
          }
        }
      ]
    })
    await alert.present();
  }

  getIdUser(){
    return this.idUser
  }
  setIdUser(value){
    this.idUser=value
  }

  getNameUser(){
    return this.nameUser
  }
  setNameUser(value){
    this.nameUser=value
  }

  getEmailUser(){
    return this.emailUser
  }
  setEmailUser(value){
    this.emailUser=value
  }

  getTelUser(){
    return this.telUser
  }
  setTelUser(value) {
    this.telUser=value
  }

  getDataNasc(){
    return this.dataNasc
  }
  setDataNasc(value) {
    this.dataNasc=value
  }

  getImgUser(){
    return this.imgUser
  }
  setImgUser(value){
    this.imgUser=value
  }

  getDataCad(){
    return this.dataCad
  }
  setDataCad(value) {
    this.dataCad = value
  }

  getStatusUser(){
    return this.statusUser
  }
  setStatusUser(value) {
    this.statusUser = value
  }

  getCatUser(){
    return this.catUser
  }
  setCatUser(value) {
    this.catUser = value
  }
}
