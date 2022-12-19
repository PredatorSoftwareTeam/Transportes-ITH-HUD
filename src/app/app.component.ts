import { Component, ViewChild, OnInit } from '@angular/core';
import { SolicitudesService } from './services/solicitudes.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transportes-ith';
  public solicitudes:Array<any> = [];
  public viajes:Array<any> = [];

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  form_registro: FormGroup;

  constructor(
    private solicitudService: SolicitudesService, private fb: FormBuilder
  ){
    this.solicitudService.getSolicitudes().subscribe((resp:any)=>{
      console.log(resp)
      this.solicitudes = resp;
      
    });
    this.solicitudService.getViajes().subscribe((res:any)=>{
      console.log(res)
      this.viajes = res;
    })
    this.form_registro = this.fb.group({
      numeroGuia: ['',Validators.required],
      estadoEntrega: ['',Validators.required],
      encargado: ['',Validators.required]
    })
  }

//Métodos para Solicitudes
  cargarSolicitudes(){
    this.solicitudService.getSolicitudes().subscribe((resp:any)=>{
      this.solicitudes = resp;
      
    })
  }  

  eliminarSolicitud(id:string){
    this.solicitudService.deleteSolicitud(id).subscribe(res=>{
      this.cargarSolicitudes();
    })
  }

//Métodos para Viajes

  cargarViajes(){
    this.solicitudService.getViajes().subscribe((res:any)=>{
      this.viajes = res;
    })
  }

  registrarEnvio(numeroGuia:any){

    const estadoEntrega="En Recoleccion";
    const encargado = 1;
  
    this.solicitudService.createViaje(estadoEntrega, encargado, numeroGuia).subscribe((resp:any)=>{
      console.log(resp);
      location.reload();
    })

  }

  actualizarSolicitud(idSolicitud:any){
    this.solicitudService.updateSolicitud(idSolicitud).subscribe((resp:any)=>{
      console.log("estado de solicitud alterado")
      location.reload();
    })
  }

  enviarViaje(idSolicitud: any, idCliente: any, numeroVenta: any, fechaEntrega: any){
    if(idCliente==5){
      this.solicitudService.enviarViajeRevistas(idSolicitud, numeroVenta, fechaEntrega)
    }else if(idCliente==4){
      this.solicitudService.enviarViajeElectronica(idSolicitud, numeroVenta, fechaEntrega)
    }else if(idCliente==3){

    }else if(idCliente==6){
      this.solicitudService.enviarViajeLibros(idSolicitud, numeroVenta, fechaEntrega)
    } else if(idCliente==7){

    } else{

    }
  }

}
