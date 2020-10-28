export default class Dictionary {
  constructor () {
    this.items = {}
  }
  
  has (key) {
    return this.items.hasOwnProperty(key)	
  }
  
  set (key, value) {
    this.items[key] = value
  }
  
  remove (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }
  
  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  
  values () {
    const values = []
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }

  getSortValues() {
      let res = this.values().sort(function(a,b){                                                                           
                if(a.Nombre > b.Nombre){                                                                                    
                    return 1;                                                                                               
                }else if(a.Nombre < b.Nombre){                                                                              
                    return -1;                                                                                               
                }                                                                                                           
                return 0;                                                                                                   
                                                                                                                            
            }) 
      return res;
  }

  size () {
    return Object.keys(this.items).length
  }
  
  keys () {
    const keys = []
    for (let key in this.items) {
    	keys.push(key)
    }
		return keys
    
    // La forma corta de hacer esto y abusando de las bondades de javascript
    // es así:
    // return Object.keys(this.items)
  }
  
  getItems () {
    return this.items
  }
}

//const dict = new Dictionary()
