<template>
    <div>
        <div class="container-fluid">
		<div class="container main">
			<div class="row">
				<div class="col-md-12">
					<!-- Menu -->
					<div class="menu-holder">
						<input type="checkbox" name="checkbox" id="check">
						<label for="check" class="checkbtn">
							<img src="@/assets/images/icon-hamburger.svg" alt="hamburger icon" class="icon-hamburger" id="icon-open" @click="showMenu">
							<img src="@/assets/images/icon-close.svg" alt="hamburger icon" class="icon-close" id="icon-closed" @click="closeMenu">
						</label>
						<div class="logo">
							<a href="">
								<img src="@/assets/images/logo.svg" alt="logo">
							</a>
						</div>
						<ul class="main-menu">
							<li><a href="">features</a></li>
							<li><a href="">pricing</a></li>
							<li><a href="">resources</a></li>
							<li class="d-none"><hr></li>
							<li class="d-none"><a href="" class="btn right-btn-btn font-weight-bold pb-2">Login</a></li>
							<li class="d-none"><a href="" class="btn right-btn-btn font-weight-bold pb-2">Sign Up</a></li>
						</ul>
						<ul class="right-btn">
							<li><a href="" class="btn right-btn-btn font-weight-bold pb-2">Login</a></li>
							<li><a href="" class="btn right-btn-btn font-weight-bold pb-2">Sign Up</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- banner -->
		<section class="my-banner mt-3 d-flex justify-content-end" style="">
			<div class="container banner">
				<div class="row">
					<div class="col-md-7 banner-text">
						<h1 class="font-weight-bold">More than just shorter links</h1>
						<p class="mt-4">Build your brand's recognition and get detailed insights on how your links are performing.</p>
						<a href="" class="btn banner-btn text-white font-weight-bold mt-3">Get Started</a>
					</div>
					<div class="col-md-5 banner-img">
						<img src="@/assets/images/illustration-working.svg" alt="illustration" class="d-block mx-auto">
					</div>
				</div>
			</div>
		</section>
		<!-- url link -->
		<section class="row url-link">
			<div class="container url-link-body">
				<div class="url-link-holder px-3">
					<form>
						<div class="container">
							<div class="row py-5 mb-4">
								<div class="col-md-9">
									<input type="text" name="" class="form-control py-4 pl-4 position-relative" placeholder="Shorten a link here..." :class="{redBorder: error}" v-model="url"><span class="text-danger">{{error}}</span><div v-show="show" class="preloader"></div>
									
								</div>
								<div class="col-md-3">
									<button class="btn btn-block btn-lg py-2 font-weight-bold" @click="getLink">Shorten it!</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- url result -->
				<div class="col-md-12 url-result p-0 mb-3" v-for="(link,index) in links" :key="index">
					<div class="card  pb-1">
						<div class="card-body py-0">
							<div class="row">
								<div class="col-md-7">
									<p class="pt-3">{{link.new}}</p>
								</div>
								<div class="col-md-3 d-flex align-items-center">
									<input type="text" class="form-control text-right copyText" disabled readonly style="border: none;color: hsl(180, 66%, 49%); " :value="link.full_short_link">
								</div>
								<div class="col-md-2 d-flex align-items-center">
									<button class="btn text-white font-weight-bold" style="margin-top: 10px; width: 100%; background: hsl(180, 66%, 49%)" @click="setActive(index)"  :class="{ 'active': activeIndex === index}" v-clipboard.prevent="(value) => link.full_short_link"><span v-if="activeIndex === index">Copied</span><span v-else>Copy</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- url result -->
			</div>
			<!-- advanced -->
			<div class="container advanced">
				<h2 class="text-capitalize text-center font-weight-bold">advanced statistics</h2>
				<p class="text-center advanced-text mx-auto">Track how your links are performing across the web with our advanced statistic dashboard.</p>
				<div class="row mt-5 advanced-content position-relative">
					<div class="col-md-4 first-card">
						<div class="card">
							<div class="card-body p-4">
								<img src="@/assets/images/icon-brand-recognition.svg" class=" first-img" alt="icons">
								<h5 class="font-weight-bold mt-4">Brand Recognition</h5>
								<p class="">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.</p>
							</div>
						</div>
					</div>
					
					<div class="col-md-4 second-card">
						<div class="card">
							<div class="card-body p-4">
								<img src="@/assets/images/icon-detailed-records.svg" alt="icons">
								<h5 class="font-weight-bold mt-4">Detailed Records</h5>
								<p class="">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision.</p>
							</div>
						</div>
					</div>
					
					<div class="col-md-4 third-card">
						<div class="card">
							<div class="card-body p-4">
								<img src="@/assets/images/icon-fully-customizable.svg" alt="icons">
								<h5 class="font-weight-bold mt-4">Fully Customizable</h5>
								<p class="">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
							</div>
						</div>
					</div>
					<div class="hr"></div>
				</div>
			</div>	
		</section>
		<!-- boost -->
		<section class="row">
			<div class="col-md-12 boost">
				<h1 class="text-center text-white font-weight-bold">Boost your link today</h1>
				<button class="btn btn-lg banner-btn font-weight-bold  text-white py-3 d-block mx-auto mt-4">Get Started</button>
			</div>
		</section>
		<!-- footer -->
		<section class="row footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<img src="@/assets/images/logo-light.svg" alt="logo">
					</div>
					<div class="col-md-2 footer-two">
						<h6 class="font-weight-bold text-white mb-4">Features</h6>
						<ul>
							<li><a href="">Link Shortening</a></li>
							<li><a href="">Branded Links</a></li>
							<li><a href="">Analytics</a></li>
						</ul>
					</div>
					<div class="col-md-2 footer-three">
						<h6 class="font-weight-bold text-white mb-4">Resources</h6>
						<ul>
							<li><a href="">Blog</a></li>
							<li><a href="">Developers</a></li>
							<li><a href="">Support</a></li>
						</ul>
					</div>
					<div class="col-md-2 footer-four">
						<h6 class="font-weight-bold text-white mb-4">Company</h6>
						<ul>
							<li><a href="">About</a></li>
							<li><a href="">Our Team</a></li>
							<li><a href="">Careers</a></li>
							<li><a href="">Contact</a></li>
						</ul>
					</div>
					<div class="col-md-2 footer-five">
						<p>
							<a href="" name="social"><img src="@/assets/images/icon-facebook.svg" alt="social media"></a>
							<a href="" name="social"><img src="@/assets/images/icon-twitter.svg" alt="social media"></a>
							<a href="" name="social"><img src="@/assets/images/icon-pinterest.svg" alt="social media"></a>
							<a href="" name="social"><img src="@/assets/images/icon-instagram.svg" alt="social media"></a>
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            url: '',
			links: [],
			show: false,
			copyT: true,
			error: '',
			activeIndex: null
        }
    },
    methods:{
        getLink(e){
			this.show = true
			e.preventDefault();
			if((this.url.startsWith('http://')) || (this.url.startsWith('https://'))){
				this.axios.post('https://api.shrtco.de/v2/shorten?url='+this.url
				).then(response =>{
					this.show = false
					let mainLink = response.data.result
					mainLink.new = response.data.result.original_link.substr(0,50) + '...'
					this.links.unshift(mainLink)
					localStorage.setItem("links", JSON.stringify(this.links))
					this.url = ''
					location.reload()
				})
			}
			else{
				this.error = 'Invalid URL'
				this.show = false
			}
		},
		setActive(index) { 
			this.activeIndex = index 
		},
		showMenu(){
			var menu = document.getElementById("icon-open");
			var close = document.getElementById("icon-closed");
			menu.style.display = "none";
			close.style.display = "block";
		},
		closeMenu(){
			var close = document.getElementById("icon-closed");
			var menu = document.getElementById("icon-open");
			close.style.display = "none";
			menu.style.display = "block";
		},
		storeLinks() {       
          if (localStorage.getItem('links')) {
            try {
              this.links = JSON.parse(localStorage.getItem('links'));
            } catch(e) {
              console.log(e);
            }
          }
		},
	},
	mounted() {
		this.storeLinks()
	}
}
</script>
<style scoped>
    .copyText{
        background: transparent !important;
	}
	.active{
		background: hsl(260, 8%, 14%) !important;
	}
	.redBorder{
		border: 2px solid red
	}
	.preloader{
		width: 30px;
		height: 30px;
		position: absolute;
		right: 0px;
		top: 10px;
		margin-right: 25px;
		border-top: 4px solid hsl(180, 66%, 49%);
		border-right: 4px solid hsl(260, 8%, 14%);
		border-bottom: 4px solid hsl(260, 8%, 14%);
		border-left: 4px solid hsl(260, 8%, 14%);
		border-radius: 50%;
		animation: roll 1s linear infinite;
	}
	@keyframes roll{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}
    .copyText:focus{
        border: none !important;
        box-shadow: none !important;
    }
    @media screen and (max-width: 600px){
        .copyText{
            text-align: left !important;
            padding-left: 0;
        }
    }
</style>