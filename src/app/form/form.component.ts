import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { HttpService } from 'src/assets/services/httpService';
import { MessagingService } from 'src/assets/services/message/message.service';
import { API } from '../core/apis';
import { City, State } from 'country-state-city';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup; 

  interests = [
    
  ]
  salesP: string = '';

  salesPerson= [
    
    {
        "_id": "66adc9d9dff3ece1cfd9bdbe",
        "name": "Ram",
       
    },
    {
        "_id": "66adca04dff3ece1cfd9bdbf",
        "name": "Shyam",
       
     
    },
    {
        "_id": "66adca22dff3ece1cfd9bdc0",
        "name": "Astha",
     
    },
    {
        "_id": "66adca3edff3ece1cfd9bdc1",
        "name": "Vishal",
     
    }
]
  categories = [
    {
        "name": "General",
        "_id": "66adc3c7dff3ece1cfd9bdaa"
    },
    {
        "name": "Gold",
        "_id": "66adc3ccdff3ece1cfd9bdab"
    },
    {
        "name": "Diamond",
        "_id": "66adc3d7dff3ece1cfd9bdac"
    },
    {
        "name": "Ruby",
        "_id": "66adc3dddff3ece1cfd9bdad"
    },
    {
        "name": "Silver",
        "_id": "66adc3e2dff3ece1cfd9bdae"
    },
    {
        "name": "Emerald",
        "_id": "66adc3e8dff3ece1cfd9bdaf"
    },
    {
        "name": "Polki",
        "_id": "66adc3efdff3ece1cfd9bdb0"
    }
]

  prodducts =  [
    {
        "name": "Rings",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc420dff3ece1cfd9bdb1"
    },
    {
        "name": "Necklace",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc42bdff3ece1cfd9bdb2"
    },
    {
        "name": "Earrings",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc437dff3ece1cfd9bdb3"
    },
    {
        "name": "Bracelet",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc443dff3ece1cfd9bdb4"
    },
    {
        "name": "Nath/Nose Pin",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc450dff3ece1cfd9bdb5"
    },
    {
        "name": "Maangtika",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc45adff3ece1cfd9bdb6"
    },
    {
        "name": "Pendant",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc55ddff3ece1cfd9bdb7"
    },
    {
        "name": "Pendant Set",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc56adff3ece1cfd9bdb8"
    },
    {
        "name": "Mangalsutra",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc581dff3ece1cfd9bdb9"
    },
    {
        "name": "Bangles",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adc591dff3ece1cfd9bdba"
    },
    {
        "name": "Chain",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adca63dff3ece1cfd9bdc2"
    },
    {
        "name": "Coin",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adca6ddff3ece1cfd9bdc3"
    },
    {
        "name": "Payal/Anklet",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adca79dff3ece1cfd9bdc4"
    },
    {
        "name": "Idol",
        "category": {
            "_id": "66adc3ccdff3ece1cfd9bdab",
            "name": "Gold"
        },
        "_id": "66adca85dff3ece1cfd9bdc5"
    },
    {
        "name": "Necklace",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adca9adff3ece1cfd9bdc6"
    },
    {
        "name": "Rings",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcaa4dff3ece1cfd9bdc7"
    },
    {
        "name": "Earrings",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcaaedff3ece1cfd9bdc8"
    },
    {
        "name": "Bracelet",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcab7dff3ece1cfd9bdc9"
    },
    {
        "name": "Nath/Nose Pin",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcac3dff3ece1cfd9bdca"
    },
    {
        "name": "Maangtika",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcacedff3ece1cfd9bdcb"
    },
    {
        "name": "Pendant",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcad8dff3ece1cfd9bdcc"
    },
    {
        "name": "Pendant Set",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcae6dff3ece1cfd9bdcd"
    },
    {
        "name": "Mangalsutra",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcaefdff3ece1cfd9bdce"
    },
    {
        "name": "Bangles",
        "category": {
            "_id": "66adc3d7dff3ece1cfd9bdac",
            "name": "Diamond"
        },
        "_id": "66adcafbdff3ece1cfd9bdcf"
    },
    {
        "name": "Necklace",
        "category": {
            "_id": "66adc3dddff3ece1cfd9bdad",
            "name": "Ruby"
        },
        "_id": "66adcb16dff3ece1cfd9bdd0"
    },
    {
        "name": "Rings",
        "category": {
            "_id": "66adc3dddff3ece1cfd9bdad",
            "name": "Ruby"
        },
        "_id": "66adcb21dff3ece1cfd9bdd1"
    },
    {
        "name": "Earrings",
        "category": {
            "_id": "66adc3dddff3ece1cfd9bdad",
            "name": "Ruby"
        },
        "_id": "66adcb2bdff3ece1cfd9bdd2"
    },
    {
        "name": "Bracelet",
        "category": {
            "_id": "66adc3dddff3ece1cfd9bdad",
            "name": "Ruby"
        },
        "_id": "66adcb3adff3ece1cfd9bdd3"
    },
    {
        "name": "Coins",
        "category": {
            "_id": "66adc3e2dff3ece1cfd9bdae",
            "name": "Silver"
        },
        "_id": "66adcb50dff3ece1cfd9bdd4"
    },
    {
        "name": "Jewellry",
        "category": {
            "_id": "66adc3e2dff3ece1cfd9bdae",
            "name": "Silver"
        },
        "_id": "66adcb5bdff3ece1cfd9bdd5"
    },
    {
        "name": "Idols",
        "category": {
            "_id": "66adc3e2dff3ece1cfd9bdae",
            "name": "Silver"
        },
        "_id": "66adcb6ddff3ece1cfd9bdd6"
    },
    {
        "name": "Artifacts",
        "category": {
            "_id": "66adc3e2dff3ece1cfd9bdae",
            "name": "Silver"
        },
        "_id": "66adcb7adff3ece1cfd9bdd7"
    },
    {
        "name": "Necklace",
        "category": {
            "_id": "66adc3e8dff3ece1cfd9bdaf",
            "name": "Emerald"
        },
        "_id": "66adcb8adff3ece1cfd9bdd8"
    },
    {
        "name": "Rings",
        "category": {
            "_id": "66adc3e8dff3ece1cfd9bdaf",
            "name": "Emerald"
        },
        "_id": "66adcb95dff3ece1cfd9bdd9"
    },
    {
        "name": "Earrings",
        "category": {
            "_id": "66adc3e8dff3ece1cfd9bdaf",
            "name": "Emerald"
        },
        "_id": "66adcba0dff3ece1cfd9bdda"
    },
    {
        "name": "Bracelet",
        "category": {
            "_id": "66adc3e8dff3ece1cfd9bdaf",
            "name": "Emerald"
        },
        "_id": "66adcbabdff3ece1cfd9bddb"
    },
    {
        "name": "Necklace",
        "category": {
            "_id": "66adc3efdff3ece1cfd9bdb0",
            "name": "Polki"
        },
        "_id": "66adcbccdff3ece1cfd9bddc"
    },
    {
        "name": "Rings",
        "category": {
            "_id": "66adc3efdff3ece1cfd9bdb0",
            "name": "Polki"
        },
        "_id": "66adcbd6dff3ece1cfd9bddd"
    },
    {
        "name": "Pendant Set",
        "category": {
            "_id": "66adc3efdff3ece1cfd9bdb0",
            "name": "Polki"
        },
        "_id": "66adcbe2dff3ece1cfd9bdde"
    },
    {
        "name": "Earrings",
        "category": {
            "_id": "66adc3efdff3ece1cfd9bdb0",
            "name": "Polki"
        },
        "_id": "66adcbf0dff3ece1cfd9bddf"
    }
]
  
months: { value: string, name: string }[] = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
  ];
  days: string[] = [];
  daysOfAnni: string[] = [];

  dobMonth = '';
  dobDay = '';
  AnniMonth = ''
  AnniDay = '';

  // States = State.getStatesOfCountry('IN')
  // Cities = []
  category = ''
  categoryInterest = '664597c6c965cddf83fbea50'
  products = ''
  Quantity = ''
  price = ''
  name = '';
  phone = '';
  email = '';


  updateDays(data, type) {
    console.log(this.dobMonth)
    const month = parseInt(data, 10);
    const daysInMonth = new Date(2000, month, 0).getDate(); 

    if (type == 'dob') {
        
        this.days = Array.from({ length: daysInMonth }, (_, i) => ('0' + (i + 1)).slice(-2));

    } else {
   
        this.daysOfAnni = Array.from({ length: daysInMonth }, (_, i) => ('0' + (i + 1)).slice(-2));

    }
    
    console.log(this.days)
  }

//   gender = '';
//   address = {
//     city: "",
//     state: "Delhi",
//     country: "India"
//   };
  type: any;
  customFields = {
    dob: "",
    anniversary_date: "",
    feedback : "",
    user_type : "visitor"
  }

  wishlist: any = [
    {
        "values": [
            {
                "selected": false,
                "name": "Necklace"
            },
            {
                "selected": false,
                "name": "Rings"
            },
            {
                "selected": false,
                "name": "Earrings"
            },
            {
                "selected": false,
                "name": "Bracelet"
            },
            {
                "selected": false,
                "name": "Nath/Nose Pin"
            },
            {
                "selected": false,
                "name": "Maangtika"
            },
            {
                "selected": false,
                "name": "Pendant Set"
            },
            {
                "selected": false,
                "name": "Mangalsutra"
            },
            {
                "selected": false,
                "name": "Bangles"
            },
            {
                "selected": false,
                "name": "Chain"
            },
            {
                "selected": false,
                "name": "Coin"
            },
            {
                "selected": false,
                "name": "Payal/Anklet"
            },
            {
                "selected": false,
                "name": "Idol"
            }
        ],
        "_id": "664597c6c965cddf83fbea50",
        "name": "Gold",
        "createdAt": "2024-05-16T05:21:10.360Z",
        "updatedAt": "2024-05-23T06:13:41.606Z",
        "__v": 0
    },
    {
        "values": [
            {
                "selected": false,
                "name": "Necklace"
            },
            {
                "selected": false,
                "name": "Rings"
            },
            {
                "selected": false,
                "name": "Earrings"
            },
            {
                "selected": false,
                "name": "Bracelet"
            },
            {
                "selected": false,
                "name": "Nath/Nose Pin"
            },
            {
                "selected": false,
                "name": "Maangtika"
            },
            {
                "selected": false,
                "name": "Pendant"
            },
            {
                "selected": false,
                "name": "Pendant Set"
            },
            {
                "selected": false,
                "name": "Mangalsutra"
            },
            {
                "selected": false,
                "name": "Bangles"
            }
        ],
        "_id": "664edec2534ab0e412b6e82c",
        "name": "Diamond",
        "createdAt": "2024-05-23T06:14:26.237Z",
        "updatedAt": "2024-05-23T06:14:26.237Z",
        "__v": 0
    },
    {
        "values": [
            {
                "selected": false,
                "name": "Necklace"
            },
            {
                "selected": false,
                "name": "Rings"
            },
            {
                "selected": false,
                "name": "Pendant Set"
            },
            {
                "selected": false,
                "name": "Earrings"
            },
            {
                "selected": false,
                "name": "Bracelet"
            },
            {
                "selected": false,
                "name": "Bangles"
            },
            {
                "selected": false,
                "name": "Mangtika"
            }
        ],
        "_id": "664edee0534ab0e412b6e82d",
        "name": "Polki",
        "createdAt": "2024-05-23T06:14:56.718Z",
        "updatedAt": "2024-05-23T06:14:56.718Z",
        "__v": 0
    },
    {
        "values": [
            {
                "selected": false,
                "name": "Coins"
            },
            {
                "selected": false,
                "name": "Home Décor"
            },
            {
                "selected": false,
                "name": "Payal/Anklet"
            },
            {
                "selected": false,
                "name": "Jewellry"
            },
            {
                "selected": false,
                "name": "Utensils"
            },
            {
                "selected": false,
                "name": "Pooja Items"
            },
            {
                "selected": false,
                "name": "Others"
            }
        ],
        "_id": "664edefd534ab0e412b6e82e",
        "name": "Silver",
        "createdAt": "2024-05-23T06:15:25.989Z",
        "updatedAt": "2024-05-23T06:15:25.989Z",
        "__v": 0
    }
]
  productsListAdded = [

  ]

  prodductsInterest: any = []


  constructor(
    private msg: MessagingService,
    private http: HttpService,

  ) { 
    this.wishlistChanged();

  }

  ngOnInit() {
    this.updateDays(this.dobMonth, 'dob')
    this.updateDays(this.AnniMonth, 'ani')
    this.prodductsInterest = this.prodducts

  }
  






  @ViewChild('emailInput') emailInput: NgModel;
  @ViewChild('nameInput') nameInput: NgModel;
  @ViewChild('phoneInput') phoneInput: NgModel;
  @ViewChild('addressInput') addressInput: NgModel;
  @ViewChild('genderInput') genderInput: NgModel;
  @ViewChild('dob') dob: NgModel;
  @ViewChild('anniversary') anniversary: NgModel;
  @ViewChild('salesPersons') salesPersons: NgModel;

  

  submit() {
    let groupedData = {};
    console.log(this.wishlist)
    const result = [];

    this.wishlist.forEach(category => {
        const selectedItems = category.values.filter(item => item.selected).map(item => item.name);

        if (selectedItems.length > 0) {
            result.push({
                values: selectedItems,
                preference: category._id
            });
        }
    });

    console.log(result);
    let newWishlist = result;
    

     (this.productsListAdded as any) = this.productsListAdded.map(pr => ({
      name: pr.name,
      count: pr.count,
      price: pr.price
    }))
    this.customFields.dob = `${this.dobDay + '-' + this.dobMonth}`

    
    this.customFields.anniversary_date = `${this.AnniDay + '-' + this.AnniMonth}`


    const date = new Date(this.customFields.dob);
   

    if (!this.customFields.feedback) {
        delete this.customFields.feedback
    }
    if (!this.customFields.anniversary_date || 
        this.customFields.anniversary_date == 'Invalid Date' || 
        this.customFields.anniversary_date == '01/01/1970' || 
        this.customFields.anniversary_date.includes('undefined') || 
        this.customFields.anniversary_date == '-'
    ) {
        delete this.customFields.anniversary_date
    }
    if (!this.customFields.dob || 
        this.customFields.dob == 'Invalid Date' || 
        this.customFields.dob == '01/01/1970' || 
        this.customFields.dob.includes('undefined') || 
        this.customFields.dob == '-'
    ) {
        delete this.customFields.dob
    }
   



    let obj: any = {
    "name": this.name,
    "email": this.email,
    "phone": this.phone,
    "source": "website",
    "salesPerson": this.salesP,
    "customFields": this.customFields,
    "product": this.productsListAdded,
    'sms': false,
    // "address": this.address,
    "isVerified": 'Verified and interested',
    "wishlist": newWishlist
  }

  if (this.customFields.user_type == 'customer') {
    obj.status = 'Customer';
    obj.pipeline = '66adbcc305cc0ed91c7536d4'
} else {
    if (obj.pipeline) {
        
        delete obj.pipeline
    }
    obj.status = 'Open'
  }

  if (!obj.product.length || obj.customFields.user_type == 'visitor') {
    delete obj.product
  }

  if (!obj.email) {
    delete obj.email
  }
  
  if (!obj.wishlist) {
    delete obj.wishlist
  }

  



    this.http.postData(API.createOutsideLead, obj).subscribe(res => {

      

      this.msg.toast('success', res.message)

      
      this.name = '';
      this.email = '';
      this.phone = '';
      this.salesP = '';
      this.category = ''
      this.products = ''
      this.dobMonth = '';
      this.AnniMonth = '';

      this.Quantity = ''
      this.categoryInterest = '664597c6c965cddf83fbea50'
      this.wishlist.forEach(item => {
        
        item.values.forEach(it => {
            it.selected = false
        })
        
      })
      this.wishlistChanged()
      this.wishlist.forEach((item, index) => {

        item.selected = false

      })
      console.log(this.wishlist)
      //   this.wishlistChanged()
        this.price = ''
        this.newWishlistSender = []
        this.customFields = {
          dob: "",
          anniversary_date: "",

          feedback : "",
          user_type : "visitor"
        }
  
        this.productsListAdded = []

        this.salesP = ''
        this.emailInput.control.reset()
        this.nameInput.control.reset()
        this.phoneInput.control.reset()
        // this.addressInput.control.reset()
        // this.genderInput.control.reset()
        this.AnniDay = ''
        this.dobDay = ''
        this.dob.control.reset()
        this.salesPersons.control.reset()
        this.anniversary.control.reset()

       
        console.log(this.wishlist)

    }, (erorr: any) => {
        console.log(erorr)
        if (erorr?.error?.data?._message == 'leads validation failed') {
          this.msg.toast('error', 'Enter a valid email address')
          this.emailInput.control.reset()


      }
    })

  }

  touchFields() {

    this.salesPersons.control.markAllAsTouched()
    this.nameInput.control.markAllAsTouched()
    this.phoneInput.control.markAllAsTouched()

    this.msg.toast('error', 'Please fill all the required feilds!!')

  }

  edit(prod, index) {

  }
  
  remove(prod, index) {

    this.productsListAdded.splice(index, 1)

  }

  addProduct() {
    let obj = {
      category:  this.categories.filter(item => item._id == this.category)[0].name,
      name:  this.prodducts.filter(item => item._id == this.products)[0].name,
      count:  this.Quantity,
      price: this.price
    }

    this.productsListAdded.push(obj)

    this.msg.toast('success', 'Added Successfully')

    this.category = ''
this.products = ''
this.Quantity = ''
this.price = ''

  }


  selectCity() {
    // this.address.city = ''
    //this.Cities = City.getCitiesOfState('IN',this.address.state)
  }

  newWishlistSender = []
  selectedCategoryIndex

  wishlistChanged() {

    this.selectedCategoryIndex = this.wishlist.findIndex(item => item._id == this.categoryInterest)

    console.log(this.selectedCategoryIndex)
  }

  dataToWishList(data) {
    data.selected = !data.selected
    // if (data.selected && !this.newWishlistSender.includes(data)) {   
    //     this.newWishlistSender.push(data)
    // } else {
    //     console.log(this.newWishlistSender)
    //     console.log(data)
    //         this.newWishlistSender.forEach((item, index) => {
    //             if (item._id == data._id) {
                    
    //                 this.newWishlistSender.splice(index, 1)

    //             }
    //         })
    // }
    console.log(this.newWishlistSender)
  }

  phoneVlidation(e) {

    const input = e.target;
    const value = input.value;

    if (isNaN(value)) {
        e.preventDefault();
        input.value = '';
    }     

  }


}









