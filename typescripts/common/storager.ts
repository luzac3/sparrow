	export class storager{
		private static convertFunctionsToStringsInJSON(json: Object){
	    for (const key in json) {
	      if(typeof(json[key]) === "function") {
		      json[key] = json[key].toString();
		    }
	    }

    	return json;
		}

		static set(Obj_name: string,Obj: Object){
			window.sessionStorage.setItem(Obj_name, JSON.stringify(Obj));
		}

		static get(Obj_name: string){
			const obj = window.sessionStorage.getItem(Obj_name);
			const toStringObj = this.convertFunctionsToStringsInJSON(obj);
			const parser = function(k: string,v: Object){return v.toString().indexOf('function') === 0 ? eval('('+v+')') : v};

			return JSON.parse(JSON.stringify(toStringObj), parser);
		}

		static check(Obj_name: string){
			if(window.sessionStorage.getItem(Obj_name)){
				return true;
			}else{
				return false;
			}
		}
		static delete(){
			window.sessionStorage.clear();
		}
	}
