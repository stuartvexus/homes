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
	
	var fetched_subjects = [];

	Service.showProperty = (id) =>{
		$.getJSON(Path.gate('/properties',null,'/'+id),  (data) => {
			//$(".eml").empty() // clear all HTML in the div before we start printing chat messages
			console.log("property",data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				 // $('.all-products').empty();
			}else{
				console.log(data)
				$("#property-detail").show()
				$('.property-detail').html = `
					Showing Property 
				`
			}
		})
	}
	
	Service.Products =  () => {
		$.getJSON(Path.gate('/properties',null,'/'),  (data) => {
			//$(".eml").empty() // clear all HTML in the div before we start printing chat messages
			console.log(data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				  $('.all-products').empty();
			}else{
			console.log("properties=>",data)
 		    $('.all-products').empty();
				$.each(data.data,  (key, val) => {
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
											<div class="layer-container"  onclick="Service.showProperty('${val.property_id}')" data-target="#property-detail" data-toggle="modal">
												<div class="rectangle-layer" style="border-radius: 12px 12px 0px 0px; opacity: 1;"><!---->
													<div class="rectangle-layer__fill ng-star-inserted" style="background: url(&quot;https://api.jetadmin.io/media/static_files/projects/custom_crm_1495/properties/property2.jpg&quot;) center center / cover no-repeat; border-radius: 12px 12px 0px 0px; opacity: 1;"><!----><!---->
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
										<button type="button" data-toggle="modal" data-target="#property-map" onclick="Service.showMap('${val.position.lat+":"+val.position.lng}','map',null,'${val.property_id}')" class="btn btn-sm btn-success" >View in Map</button>
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
	
	Service.Orders =  () => {
		$.getJSON(Path.gate('/book',null,'/'),  (data) => {
			console.log("order=>",data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				 $('.all-orders').empty();
			}else{
				
				$('.all-orders').empty();
				$.each(data.data,  (key, val) => {
					$('.all-orders').append( `
						<tr>
							<th scope="row">#${val.order._id}</th>
							<td>${val.user.name}</td>
							<td><span class="badge rounded-pill bg-success-10 text-success custom-badge">${val.order.status}</span>
							</td>
							<td>${val.order.amount}</td>
						</tr>
					`);
				 });
			}
		});
	}

	Service.Orders();
	Service.Income =  () => {
		$.getJSON(Path.gate('/book',null,'/income/all'),  (data) => {
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
			}else{
				console.log(data)
				$('.hm-recent-orders').empty();
				$('.hm-trending-products').empty();
				/*$('.hm-total-products').text(data.products.length);
				$('.hm-total-orders').text(data.orders.length);
				$('.hm-total-pending').text(data.pending.length);
				$('.hm-total-sales').text(data.amount);*/
				
				//var i = 0
				
				//Service.roundedChart("chart-order",["Recent Orders","Pending Payments","Recieved Payments"],[data.invoice,data.invoice-data.amount,data.amount])
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
				
				$('.all-users').empty();
				$.each(data.data,  (key, val) => {
					$('.all-users').append( `
						<tr>
							<th scope="row">#${val.order._id}</th>
							<td>${val.user.name}</td>
							<td><span class="badge rounded-pill bg-success-10 text-success custom-badge">${val.order.status}</span>
							</td>
							<td>${val.order.amount}</td>
						</tr>
					`);
				 });
			}
		});
	}
	Service.Users();
	
	Service.Enquiries = () =>{
		$.getJSON(Path.gate('/enquiries',null,'/'),  (data) => {
			console.log(data)
			if (jQuery.isEmptyObject(data)) {
				 //console.log('yes');
				 $('.all-enquiries').empty();
			}else{
				
				$('.all-enquiries').empty();
				$.each(data.orders,  (key, val) => {
					$('.users').append( `
						<tr>
							<th scope="row">#${val.order._id}</th>
							<td>${val.user.name}</td>
							<td><span class="badge rounded-pill bg-success-10 text-success custom-badge">${val.order.status}</span>
							</td>
							<td>${val.order.amount}</td>
						</tr>
					`);
				 });
			}
		});
	}
	Service.Enquiries();
	console.log(fetched_subjects)
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

