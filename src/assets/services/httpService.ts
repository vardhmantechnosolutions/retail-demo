import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// services

import { environment } from 'src/environments/environment';
import { LoaderService } from './loader/loader.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
            private http: HttpClient,
            private loader: LoaderService
    ) {
    }

    /**
     * @method (get http request)
     * @param url (api url)
     * @param data (all search params)
     * @param backGroundUrl (don't want to show loader for any request pass true)
     */
    getData(url: string, data?: any, backGroundUrl?: boolean): Observable<any> {


        const searchParams = this.appendParams(data);
        const apiUrl = `${environment.apiUrl}${url}`;
        if (backGroundUrl) {
            this.loader.backGroundUrls.push(apiUrl);
        }
        return this.http.get(apiUrl, {params: searchParams}).pipe(map((response: any) => {
            return response;
        }));
    }

    
    postData(url: string, data, formData?: boolean, backGroundUrl?: boolean) {

        console.log(data)

        const apiUrl = `${environment.apiUrl}${url}`;
        const postData = !formData ? data : data;
console.log(postData)

        if (backGroundUrl) {
            this.loader.backGroundUrls.push(apiUrl);
        }
        console.log(postData)

        // const body = new HttpParams()
        //   .set('language', postData['language'])
        //   .set('status', postData['status'])
        //   .set('questions',JSON.parse(postData['questions']))
        //   .set('time_spent_frontend', postData['time_spent_frontend'])
        //   .set('user_exam_id', postData['user_exam_id'])
        //   .set('time', postData['time'])
        return this.http.post<any>(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }



    postDataForHeadeAndBody(url: string, data, backGroundUrl?: boolean) {


        const apiUrl = `${environment.apiUrl}${url}`;
        const obj = {
            language: data.language,
            name: data.name,
        }
        // const postData = !formData ? data : this.appendFormData(data?.authorization);
        if (backGroundUrl) {
            this.loader.backGroundUrls.push(apiUrl);
        }

        return this.http.post<any>(apiUrl, obj, {headers: data.authorization}).pipe(map((response: any) => {
            return response;
        }));
    }






    /**
     * @method (put http request)
     * @param url (api url)
     * @param data (data which we have to pass to server)
     */
    putData(url: string, data, formData?: boolean, backGroundUrl?: boolean) {

        const apiUrl = `${environment.apiUrl}${url}`;
        const postData = !formData ? data : data;

        if (backGroundUrl) {
            this.loader.backGroundUrls.push(apiUrl);
        }

        return this.http.put<any>(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }

    

    


    /**
     * @method (append params)
     * @param myParams (pass data which you want to make http params)
     */
    appendParams(myParams: { [x: string]: any; }): HttpParams {
        let params = new HttpParams();
        if (!!myParams) {
            for (const key of Object.keys(myParams)) {
                // if (data[key] || key == 'skip')
                params = params.append(key, myParams[key]);
            }
        }
        return params;
    }



}
