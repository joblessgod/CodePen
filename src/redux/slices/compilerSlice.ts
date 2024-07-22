import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string,
        css: string,
        javascript: string,

    },
    currentLanguage: "html" | "css" | "javascript",
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: `<div class="wrapper">
	<div class="navbar">
		<a href="#" class="navitem active" onclick="select(this)" data-clr="#e4ecfa">
			<div class="indicator"></div>
			<div class="hoverindicator"></div>
			<ion-icon name="home"></ion-icon>
		</a>
		<a href="#" class="navitem" onclick="select(this)" data-clr="#fff6cc">
			<div class="indicator"></div>
			<div class="hoverindicator"></div>
			<ion-icon name="person"></ion-icon>
		</a>
		<div class="navsearch">
			<input class="searchbox"></input>
			<div class="searchicon" onclick="selectsearch()">
				<ion-icon name="search"></ion-icon>
			</div>
		</div>
		<a href="#" class="navitem" onclick="select(this)" data-clr="#f0e4fa">
			<div class="indicator"></div>
			<div class="hoverindicator"></div>
			<ion-icon name="cog"></ion-icon>
		</a>
	</div>
</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
        css: `body {
	--activeclr: #e4ecfa;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: var(--activeclr);
	transition: --activeclr 300ms ease;
}

@property --activeclr {
  syntax: "<color>";
  initial-value: #e4ecfa;
  inherits: true;
}

.wrapper {
	border-radius: 1rem;
	overflow: hidden;
	height: 8rem;
	width: 22rem;
	background: var(--activeclr);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.navbar {
	display: flex;
	justify-content: space-between;
	height: 4.5rem;
	background: white;
	padding: 0 0.75rem;
	transition: padding 300ms ease;
}
.navbar:has(.navsearch.active) {
	padding: 0 0.75rem;
}

.navitem, .navsearch {
	position: relative;
	display: grid;
	place-content: center;
	color: #fff;
	width: 4.5rem;
	text-align: center;
	color: black;
	font-size: 1.5rem;
	transition: width 300ms ease, flex-grow 300ms ease;
}
.navbar:has(.navsearch.active) .navitem {
	width: 3rem;
}



.hoverindicator {
	position: absolute;
	width: 2.5rem;
	inset: 50% auto auto 50%;
	transform: translate(-50%, -50%);
	background: var(--activeclr);
	opacity: 0;
	border-radius: 0.5rem;
	height: 0.25rem;
	inset: auto auto -0.25rem 50%;
	transition: inset 300ms ease, opacity 300ms ease;
}
@media (hover: hover) {
	.navitem:not(.active):hover .hoverindicator,
	.navsearch:not(.active):hover .searchbox {
		border-radius: 1.25rem;
		height: 2.5rem;
		opacity: 1;
		transition: opacity 150ms ease;
	}
}

.active .hoverindicator {
	opacity: 1;
	border-radius: 0.5rem;
	height: 0.25rem;
	inset: auto auto 0.25rem 50%;
	transition: inset 300ms ease, height 300ms ease, border-radius 300ms ease;
}



.navsearch.active {
	flex-grow: 1;
}
.searchbox {
	position: absolute;
	inset: 1rem;
	background: var(--activeclr);
	border-radius: 1.25rem;
	opacity: 0;
	transition: inset 300ms ease, padding 300ms ease, color 100ms ease, opacity 300ms ease;
	-webkit-appearance: none;
	border: none;
	padding: 0 1rem 0 1rem;
	font-size: 1rem;
	color: transparent;
}
.active .searchbox {
	inset: 1rem 0.25rem;
	height: 2.5rem;
	border-radius: 1.25rem;
	padding: 0 2.5rem 0 1rem;
	opacity: 1;
	color: black;
	transition: inset 300ms ease, padding 300ms ease, color 200ms ease 50ms, opacity 300ms ease;
}


.searchicon {
	position: absolute;
	inset: 0 0 0 auto;
	width: 4.5rem;
	display: grid;
	place-content: center;
	transition: width 300ms ease;
}

.active .searchicon {
	width: 3rem;
}`,
        javascript: `function select(el) {
	document.querySelector(".navsearch").classList.remove("active")
	document.querySelector(".active").classList.remove("active")
	
	el.classList.add("active")
	
	document.body.style.setProperty('--activeclr', el.dataset.clr);
}
function selectsearch() {
	console.log("select")
	const el = document.querySelector(".navsearch")
	el.classList.toggle("active")
	if (el.classList.contains("active")) {
		document.querySelector(".searchbox").focus()
	}
}`,
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload
        },
        updateFullCode: (state, action: PayloadAction<CompilerSliceStateType["fullCode"]>) => {
            state.fullCode = action.payload
        },
    },
});

export default compilerSlice.reducer
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } = compilerSlice.actions