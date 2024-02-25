const express = require("express")
const route = express.Router();
const contactmodel = require("../database/contactschema");
const notemodel = require("../database/notesschema");
const usermodel = require("../database/userschema");
const calendermodel = require("../database/calenderschema");
const ticketmodel = require("../database/ticketschema");
const productmodel = require("../database/productschema");
const linemodel = require("../database/linechartschema");
const userloginmodel = require("../database/adminuserschema")
const path = require("path");
const fileUpload = require("express-fileupload");

route.use(fileUpload());

route.post("/addnote", async(req, res)=>{

    try {
        console.log(req.body.color);
        if(req.body.note == null){
            const finding = await notemodel.find();
           return res.json(finding)
        }
        const noteaddprocess = new notemodel({
            note: req.body.note,
            color: req.body.color,
        })
        
        const success = await noteaddprocess.save();
        const finding = await notemodel.find();
        res.send(finding)
    } catch (error) {
        console.log(error)
    }

})


route.put("/updatenote", async(req, res) =>{
    try {
        console.log(req.body.id)
        const id = req.body.id;
        const note = req.body.note
        const update = await notemodel.findOneAndUpdate({_id : id}, {note: note},{new : true})
        res.send(update)

    } catch (error) {
        console.log(error);
    }
})


route.get("/searchnote", async(req, res)=>{

    try {
           
           const finding = await notemodel.find({note: {$regex: req.query.search, $options: "i"} })
            res.json(finding);
    } catch (error) {
        console.log(error);
    }

})

route.delete("/deletenote", async(req, res)=>{
     try {
      
      const data = await notemodel.findOneAndDelete({_id: req.body.id})
      res.json("success")
 console.log(data);

     } catch (error) {
      console.log(error);
     }
})


route.post("/addcontact", async(req, res)=>{
        try {
          const {fname, lname, company, email, notes, dipartment, phone, address} = req.body   
          if(fname, lname, company, email, notes, dipartment, phone, address == undefined){
            
            const data = await contactmodel.find();
            return res.json(data)
               
          }

            const inserting = new contactmodel({
                fname: req.body.fname,
                lname: req.body.lname,
                phone: req.body.phone,
                email: req.body.email,
                company: req.body.company,
                dipartment: req.body.dipartment,
                address: req.body.address,
                notes: req.body.notes,
                rate: req.body.rate
            })
            
            const success = await inserting.save()
            const data = await contactmodel.find();
            res.json(data)
        
        } catch (error) {
            console.log(error)
        }
})


route.put("/updatecontact", async(req, res)=>{
      try {
        
        const updating = await contactmodel.findOneAndUpdate({_id : req.body.e._id}, { $set: { fname: req.body.e.fname, lname: req.body.e.lname, phone: req.body.e.phone, email: req.body.e.email, company: req.body.e.company, dipartment: req.body.e.dipartment, address: req.body.e.address, notes: req.body.e.notes, rate: req.body.e.rate } },{new: true});
         res.json(updating);
         console.log(updating);


      } catch (error) {
        console.log(error)
      }
})

route.delete("/deletecontact", async (req, res)=>{
           try {
            console.log(req.body.e)
            const deleting = await contactmodel.findOneAndDelete({_id: req.body.e});
            res.json(deleting);
            console.log(deleting);

           } catch (error) {
            console.log(error)
           }
})


route.get("/searchcontact", async(req, res)=>{
           try {
            
                const fetching = await contactmodel.find({fname: {$regex: req.query.search, $options: "i"}});
                res.json(fetching);
                

           } catch (error) {
            console.log(error)
           }
})

route.get("/filtercontact", async(req, res)=>{
           try {
            
            let getdata = {}

            if(req.query.catogary == "all"){
              console.log("this is a another hi for catagory")
              getdata = {}
              console.log("lksdfjp")
             }
             if(req.query.catogary == "star"){
              console.log("this is a another hi for catagory")
              getdata.rate = "true"
              console.log("star")
             }
             if(req.query.catogary == "engineer"){
              getdata.dipartment = "engineer";
             }
             if(req.query.catogary == "support"){
              getdata.dipartment = "support";
             }
             if(req.query.catogary == "sales"){
              getdata.dipartment = "sales";
             }
             

              const data = await contactmodel.find(getdata)
              res.json(data);

           } catch (error) {
            console.log(error);
           }
})


route.patch("/updatecontactrate", async(req, res)=>{
          try {
            
            let setrate = "";
             if(req.body.e.rate == "true"){
                setrate = "false";
             }
             if(req.body.e.rate == "false"){
                  setrate = "true"
             }
              
             console.log(setrate);
              const updating = await contactmodel.findOneAndUpdate({_id: req.body.e}, {rate: setrate}, {new: true});
                res.json(updating);
                
                
          } catch (error) {
            console.log(error);
          }
})


route.post("/adcalenderevent", async(req, res)=>{
         try {
            console.log(req.body)
           const inserting = new calendermodel({
                 start:req.body.start,
                 end:req.body.end,
                 title: req.body.title
           })

           const inserted = await inserting.save();
           console.log(inserted);

         } catch (error) {
            console.log(error);
         }
})


route.get("/fetchcalender", async(req, res)=>{
              try {
                
                  const fetching = await calendermodel.find();
                  res.json(fetching);

              } catch (error) {
                console.log(error);
              }
})



route.post("/adduser", async(req, res)=>{
  try {
  

   const inserting = new usermodel({
       name: req.body.name,
       email: req.body.email,
       role: req.body.role
   })

   const inserted = await inserting.save();
   const data = await usermodel.find();
   res.json("success");
   console.log(inserted);

  } catch (error) {
    console.log(error)
  }

})


route.get("/getusers", async(req, res)=>{
     try {
      
      console.log(req.query.role);
       const data = await usermodel.find({role: req.query.role});
       res.json(data);

     } catch (error) {
      console.log(error)
     }
})


route.post("/addticket", async(req, res)=>{
try {
  
  const inserting = new ticketmodel({
    ticket: req.body.ticket,
    status: "pending",
    assign: "john"
  })

  const inserted = await inserting.save();
  res.json("success");
  console.log(inserted);

} catch (error) {
  console.log(error);
}

})


route.get("/getticket", async(req, res)=>{
      try {
        
          const fetching = await ticketmodel.find();

          const pending = fetching.filter((curr)=>{
             return curr.status == "pending"
          })
          const close = fetching.filter((curr)=>{
            return curr.status == "close"
         })
         const open = fetching.filter((curr)=>{
          return curr.status == "open"
         })
          console.log(pending.length)
          const total = await ticketmodel.find().count();
    
          res.json({fetching,total: total , pending: pending.length, close: close.length, open: open.length});  

      } catch (error) {
        console.log(error);
      }
})


route.delete("/deleteticket", async(req, res)=>{
    try {
      console.log(req.body)
      const delet =  await ticketmodel.findOneAndDelete({_id: req.body.id});
       res.json("success");

    } catch (error) {
      console.log(error);
    }
})


route.post("/addproduct", async(req, res)=>{
   try {
    console.log(req.files)
    const filename =Date.now()+"_"+req.files.image.name;
    const file = req.files.image;
 
    let uploaddirectory  = path.join(__dirname+"/../uploads");
    
    const uploadpath = uploaddirectory+"/"+filename;
 
 
    file.mv(uploadpath, async(error)=>{
       if(error){
           return res.json(error);
       }
      
     
    })
 
 let insertproduct = new productmodel({
         name: req.body.name,
         catogary: req.body.catogary,
         price: req.body.price,
         image: filename
       })
     
       let created = await insertproduct.save();
       res.json("success")

   } catch (error) {
    console.log(error);
   }
})


route.get("/fetchproducts", async(req, res)=>{
       try {
        
       
        let getdata = {}
        let sortprice = {}
        if(req.query.catogary){
  
          if(req.query.catogary !== "all"){
            getdata.catogary = req.query.catogary
          }
         
          console.log(getdata)
         }
         if(req.query.price){
          

          if(req.query.price == "hightolow"){
             sortprice.price = -1 
          }
          if(req.query.price == "lowtohigh"){
            sortprice.price = 1 
          }
      
         
        }
       
        const data = await productmodel.find(getdata).sort(sortprice);
        res.json(data);
        console.log(data)

       } catch (error) {
        console.log(error);
       }
})


route.post("/linedata", async(req, res) =>{
     try {
      
      const inserting = new linemodel({
        month: "dece",
        salesquantity: 11
      })

      const data = await inserting.save();
      console.log(data)

     } catch (error) {
      console.log(error);
     }
})


route.get("/linefetch", async(req, res)=>{
        try {
          
          const data = await linemodel.find();
          res.json(data);

        } catch (error) {
          console.log(error);
        }
})


route.post("/register", async(req, res)=>{
     try {
      
      const inserting = new userloginmodel({
        username: "naved9589",
        password: "naved9589157798"
      })

      const data = await inserting.save();
      console.log(data)
     } catch (error) {
      console.log(error);
     }
})

route.post("/login", async(req, res)=>{
     try {
      
      const finding = await userloginmodel.findOne({username: req.body.username});
      if(!finding){
        return res.json("please provide valid username");
       
      }
      if(finding.password !== req.body.password){
        return res.json("please provide correct information");    
      }
      
      res.json({username: finding.username});

     } catch (error) {
      console.log(error);
     }
})

module.exports = route;