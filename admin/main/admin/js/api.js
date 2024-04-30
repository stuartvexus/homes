"use strict";
function hcr(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
}

$(document).ready( () => {
	// show current year
	

	var fetched_users = [];
	var fetched_houses = [];

	
	Service.Products =  () => {
		$.getJSON(Path.gate('/properties',null,'/'),  (data) => {
			//$(".eml").empty() // clear all HTML in the div before we start printing chat messages
			console.log(data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				  $('.all-products').empty();
			}else{
			console.log("properties=>",data)
			let i = 0;
			let value = 0
 		    $('.all-products').empty();
				$.each(data.data,  (key, val) => {
					value += parseFloat(val.price)
					$(".properties-total").text(i++)
					$(".properties-new-total").text(i++)
					$(".properties-total-value").text(`KES ${value}`)
					fetched_houses.push({id:val.property_id,name:val.name})
					console.log("position",val.position)
					$('.all-products').append(`
					<div class="kanban-board-column ng-star-inserted" style="max-width: 245px;height: 244px;flex: auto;margin-left: 9px;margin-top:9px;">
					<div class="kanban-board-column__header-main"><div class="kanban-board-column__status"><span class="status color_bright-blue_1 background-color_bright-blue_2"><!----><!---->Scheduled<!----><!----></span></div></div><!----><div class="kanban-board-column__header-right ng-star-inserted"><span class="kanban-board-column__tip"> 8 </span><span class="kanban-board-column__action icon-repeat"></span></div>
					<div class="kanban-board-column__scrollable" xsscrollable="">
					
					
					<div cdkdroplist="" class="kanban-board-column__content cdk-drop-list ng-star-inserted" id="property_management_3_element_r1v63v5j_0_stage_1"><!---->
						<div cdkdrag="" class="kanban-board-column__item cdk-drag ng-star-inserted" style="touch-action: none; user-select: none;">
							<div class="kanban-board-item-view kanban-board-item-view_draggable kanban-board-item-view_clickable ng-star-inserted" style="height: 353px; min-width: 236px; min-height: 255px; max-height: 489px;">
									<div class="custom-element-view" style="border-radius: 12px; opacity: 1; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;"><!---->
									</div>
								<div class="custom-element-view__content"  >
									<div class="layer" style="mix-blend-mode: normal; width: 99.712%; height: 30.5949%; left: 50%; top: 14.7309%; transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0);">
									
										<div class="custom-element-view__fill ng-star-inserted" style="background: rgb(255, 255, 255); border-radius: 12px;">   
											<div class="layer-container view-property" id='${val.property_id}' onclick="Service.showProperty('${val.property_id}')" data-target="#property-detail" data-toggle="modal">
												<div class="rectangle-layer" style="border-radius: 12px 12px 0px 0px; opacity: 1;"><!---->
													<div class="rectangle-layer__fill ng-star-inserted" style="background: url(&quot;${val.images.length > 0 ? server_url+"/"+val.images[0] : 'https://api.jetadmin.io/media/static_files/projects/custom_crm_1495/properties/property2.jpg'}&quot;) center center / cover no-repeat; border-radius: 12px 12px 0px 0px; opacity: 1;"><!----><!---->
													</div><!---->
													
												</div><!---->
											</div>
											
										</div>
										
									</div>
									<div class="property-content">
										<h3>${val.name}</h3>
										<h5>${val.currency} <b>${val.price}</b></h5>
										<div class="property-features">
										${val.features}
										</div>
										<div class="desc">
											<p>${val.description}</p>
										</div>
										<div class="" style="position:absolute;right: 2.5%;bottom: 2.5%;z-index: 99;">
										<button type="button" data-toggle="modal" data-target="#property-map" onclick="Service.showMap('${val.position.lat+":"+val.position.lng}','map','property-position','${val.property_id}')" class="btn btn-sm btn-success" >View in Map</button>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
					
					</div>
					`);

				 });
			}
		});
	}
  // dispaly supported terms
	Service.Products();
	

	Service.updateOrder = (id,status) =>{
		var x = ({
					accepted:status === true ? 'false' : 'true',
			   });
         console.log(x);
		if (x.accepted) {
           $.patch(Path.gate('/book',null,'/'+id), JSON.stringify(x) ).done( ()=> {
           	 Service.Orders();
			 alert("Book Accepted")
           });
		}else{
			alert("Missing required data")
		}
	}
	
	Service.Orders =  () => {

		$.getJSON(Path.gate('/orders',null,'/'),  (data) => {

			console.log("order=>",data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				 $('.all-orders').empty();
			}else{
				let amt = 0
				$('.all-orders').empty();
				$.each(data.data,  (key, val) => {
					$(".properties-booked").text(`KES ${ amt+=val.amount}`)
					$(".orders-income").text(amt)
					for(var h of fetched_houses){
						if(h.id === val.property_id){
							val.property_name = h.name
						}
					}
					for(var u of fetched_users){
						if(u.id === val.user_id){
							val.user_name = u.name
						}
					}
					$('.all-orders').append( `
						<tr>
							<td>2</td>
							<td><a href="#"><img src="/assets/images/avatar/1.jpg" class="avatar" alt="/assets/images/avatar/1.jpg"> ${val.user_name}</a></td>
							<td>${val.property_name}</td>                       
							
							<td><span class="status text-info">&bull;</span> ${val.accepted === true ? "Accepted" : "Pending"}</td>
							
							<td><a href="javascript:void(0)" onclick="Service.updateOrder('${val.booking_id}', ${val.accepted})" class="view update-order" title="Accept/Reject" data-toggle="tooltip">${val.accepted ? "Cancel" : "Accept"}<i class="material-icons">&#xE5C8;</i></a></td>

						</tr>
					`);
				 });
			}
		});
	}

	Service.Orders();
	Service.Income =  () => {

		$.getJSON(Path.gate('/orders',null,'/income/all'),  (data) => {
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
			}else{
				let amt = 0
				console.log("income",data)
				$.each(data.data,  (key, val) => {
					$(".properties-total-invoice").text(`KES ${amt+=val.amount}`)
				})
				$('.hm-recent-orders').empty();
				$('.hm-trending-products').empty();
				$('.all-transactions').empty();
				$.each(data.data,  (key, val) => {
					
					for(var h of fetched_houses){
						if(h.id === val.property_id){
							val.property_name = h.name
						}
					}
					for(var u of fetched_users){
						if(u.id === val.user_id){
							val.user_name = u.name
						}
					}
					$('.all-transactions').append( `
						<tr>
							<td>2</td>
							<td><a href="#${val._id}">${val.user_name}</a></td>
							<td>${val.property_name}</td>                       
							
							<td><span class="status text-info">&bull;</span> ${val.complete === true ? "complete payment" : "Pending payment"}</td>
							
							<td><a href="javascript:void(0)" class="view update-order" title="Date" data-toggle="tooltip">${new Date(val.createdAt).toUTCString()}<i class="material-icons">&#xE5C8;</i></a></td>

						</tr>
					`);
				 });
			}
		});
	}

	Service.Income();

	Service.Users = () =>{
		$.getJSON(Path.gate('/users',null,'/'),  (data) => {
			console.log(data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				 $('.all-users').empty();
			}else{
				let i = 0
				$('.all-users').empty();
				$.each(data.data,  (key, val) => {
					fetched_users.push({id:val.user_id,name:val.fullName})
					$(".properties-customers").text(i++)
				 });
			}
		});
	}
	Service.Users();
	
	Service.enquiryRoom = (id) => {
		$.getJSON(Path.gate('/enquiries',null,'/'+id),  (data) => {
			console.log("Enquiry",data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				// $('.enquiriy-room').empty();
			}else{
				
				$('.enquiriy-room').empty();
				let i = 1;
				if(data.data){
					let val = data.data
					if(val.enquiry_id){
						$("#enquiry_id").val(val.enquiry_id)
					}
					$('.enquiry-room').append(`<div class='reply-button' style="position:absolute;bottom: 1.5%;left: 0;width: 100%;text-align:center;"><button class="btn btn-primary reply-enquiry">Reply</button></div>`)
					
					
					$('.enquiry-room').append(`
						<div class="d-flex flex-row justify-content-start">
							<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
							  alt="${val.email}" style="width: 45px; height: 100%;">
							<div>
							  <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">${val.content}</p>
							  <p class="small ms-3 mb-3 rounded-3 text-muted float-end">${val.createdAt}</p>
							</div>
						 </div>
					`)
				}
			}
		});
	}
	
	$('.reply-enquiry').click(function(){
		let enquiry_id = $("#enquiry_id").val()
		var x = ({
					content:$('.enquiry-content').val(),
					read:true,
			   });
         console.log(x);
		if (x.content) {
           $.patch(Path.gate('/enquiries',null,'/'+enquiry_id), JSON.stringify(x) ).done( ()=> {
           	 Service.Enquiries();

           });
		}else{
			alert("Missing content data")
		}
	})
	
	Service.Enquiries = () =>{
		$.getJSON(Path.gate('/enquiries',null,'/'),  (data) => {
			console.log("Enquiries",data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				// $('.all-enquiries').empty();
			}else{
				
				$('.all-enquiries').empty();
				$.each(data.data,  (key, val) => {
					//console.log(val)
					$('.all-enquiries').append( `
						<li class="p-2 border-bottom" onclick="Service.enquiryRoom('${val.enquiry_id}')">
							<a href="#!" class="d-flex justify-content-between">
							  <div class="d-flex flex-row">
								<div>
								  <img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
									alt="avatar" class="d-flex align-self-center me-3" width="60">
								  <span class="badge bg-success badge-dot"></span>
								</div>
								<div class="pt-1">
								  <p class="fw-bold mb-0">${val.email}</p>
								  <p class="small text-muted">${val.title}</p>
								</div>
							  </div>
							  
							</a>
						</li>
					`);
				 });
			}
		});
	}
	Service.Enquiries();
	//console.log(fetched_subjects)

})

function hm_v_s_units(x,y,z) {
	console.log(x,y,z)
  var dx ;
	$('.hm-mv-'+z+'').empty();
	dx = x.split(',');
	if (dx === null || dx === '') {
		 $('.hm-srch-str-units').hide('slow');
		 $('.hm-mv-'+z+'').append(`<tr><td>${y}</td><td>Main</td></tr>`);
	}else{
		$('.hm-srch-str-units').show('slow');
		$.each(dx,  (key, val) => {
			if(val === ''){return true}
			$('.hm-mv-'+z+'').append(`<tr><td>${val}</td><td><span class="btn btn-default  btn-sm"><i class="mdi-action-delete text-danger text-md "></i></span></td></tr>`);
	 });
	}
	$('.hm-modal-edit-'+z+'-hd').html(y);
	$('.hm-modal-edit-'+z+'').modal('show');
}


// REMOVE DATA FROM ANY HILMACS DOCUMENT
Service.del = (a,b) => {

	console.log("del",a,b)

	// hilmacs default comment
	$.delete(Path.gate(b,null,'/'+a)).always( () => {
     $('.'+a+'_btn').removeClass('red');
		 $('.'+a+'_btn').addClass('yellow');
		 $('.'+a+'_btn').html(hcr('loaderIcon_sm')+' Discarding');
	}).done( () => {
		// control view
		$('.'+a+'_off').hide(2000);
	}).fail( () => {
		alert('Account Deletion failed');
	});
}


//CHANGE ACCOUNT State
Service.chgState = (a,b,c) => {
		// hilmacs default comment
	 $.get(Path.gate(b,null,'update/'), {'id':a , 'val':c}).always( () => {
			 if (c == 1 ) {
				 $('.btn-'+a).removeClass('btn-danger');
				 $('.btn-'+a).addClass('btn-info');
	 			 $('.hm-acc-state-'+a).removeClass('mdi-action-lock');
	 			 $('.hm-acc-state-'+a).addClass('mdi-action-lock-open');
	       Service.html('.state-'+a,'In active');
			 } else {
			   $('.btn-'+a).addClass('btn-danger');
				 $('.btn-'+a).removeClass('btn-info');
				 Service.html('.state-'+a,'Active');
			 }
	 }).fail( () => {
		 console.log('failed Deactivating...');
	 });
}

Service.lineChart = (id,data) =>{
	console.log("in")
	const xValues = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	new Chart(id, {
	type: "line",
		data: {
			labels: xValues,
			datasets: [{
			data:data[0],
			borderColor: "red",
			fill: false,
			title:"Recent"
			},{
			data: data[1],
			borderColor: "green",
			fill: false,
			title:"Pending"
			},{
			data: data[2],
			borderColor: "green",
			fill: false,
			title:"Recieved"
			}]
		},
		options: {
			legend: {display: false}
		}
	});
	return true
}

Service.roundedChart = (id,labels,data) =>{
	console.log("in")
	const xValues = labels;
	const yValues = data;
	const barColors = ["red", "green","blue","orange","brown"];
	new Chart(id, {
		type: "doughnut",
		data: {
		  labels: xValues,
		  datasets: [{
			backgroundColor: barColors,
			data: yValues
		  }]
		},
		options: {
		  title: {
			display: true,
			
		  }
		}
	  });
	return true
}

