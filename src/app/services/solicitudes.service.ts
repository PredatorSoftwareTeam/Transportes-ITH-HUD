import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  _url = 'https://transportesithapi-production.up.railway.app/api/solicitudes'
  _url_viajes = 'https://transportesithapi-production.up.railway.app/api/viajes'
  _url_update_estado_solicitud ='https://transportesithapi-production.up.railway.app/api/solicitud'
  _url_revistas_5 = 'https://apis-production-84ff.up.railway.app/Transporte/Reg'
  _url_libros_6 = 'https://homeeditorial-production.up.railway.app/api/envios'
  _url_electronicos_4 = 'https://nodejs-mysql-restapi-master-production.up.railway.app/API/ENVIOS'



  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio de Solicitudes')
   }

   //Solicitudes
   getSolicitudes(){
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')
      return this.http.get(this._url, {
        headers: heades
      });
   }

   getSolicitud(id: string){
    return this.http.get(this._url+'/'+id)
   }

   deleteSolicitud(id: string){
    return this.http.delete(this._url+'/'+id)
   }

   updateSolicitud(id: string){
    return this.http.patch(this._url+'/'+id,{estadoRevisado: 2})
   }
//Viajes
   getViajes(){
    return this.http.get(this._url_viajes)
   }

   getViaje(id: string){
    return this.http.get(this._url_viajes+'/'+id)
   }

   createViaje(estadoEntrega: string, encargado: any,numeroGuia: any){
    return this.http.post(this._url_viajes,{estadoEntrega: "En Recoleccion", idPersonal: encargado, numeroGuia: numeroGuia })
   }


//Revistas

   enviarViajeRevistas(idSolicitud: string, numeroVenta: any, fechaEntrega: any){
    return this.http.post(this._url_revistas_5,{edoEntr: "En Recoleccion", NoGuia: idSolicitud, NoVta: numeroVenta, fecha:fechaEntrega })
   }

//Libros

   enviarViajeLibros(idSolicitud: string, numeroVenta: any, fechaEntrega: any){
    return this.http.post(this._url_libros_6,{edoEntr: "En Recoleccion", NoGuia: idSolicitud, NoVta: numeroVenta, fecha:fechaEntrega })
   }

  //Electronica
  enviarViajeElectronica(idSolicitud: string, numeroVenta: any, fechaEntrega: any){
    return this.http.post(this._url_electronicos_4,{edoEntr: "En Recoleccion", NoGuia: idSolicitud, NoVta: numeroVenta, fecha:fechaEntrega })
   }
}
