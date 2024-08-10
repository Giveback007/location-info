<script>
    import Button from "../components/atoms/Button.atom.svelte";
    import logo from '../assets/logo.svg'


</script>
<!-- class=" p-10 border-app-line-color border-2 fixed top-2 left-2 z-50 bg-white" -->
<div
    class="w-full max-w-2xl p-4 mx-auto fixed z-50 bg-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
>
    <img src={logo} alt="logo" class="m-auto mb-6"/>
    <h1 class="text-3xl font-semibold text-center mb-3">CREAR UNA CUENTA</h1>
    <p class="text-center">Crea una para continuar en el sitio</p>
    <Button
        class="font-semibold text-xl"
        size='auto'
        type="cta"
    >
        CREAR CUENTA
    </Button>

    <div class="w-full flex items-center justify-between py-5">
        <hr class="w-full bg-app-line-color-2 h-0.5" />
        <p class="text-base font-normal leading-4 px-2.5 text-black">O</p>
        <hr class="w-full bg-app-line-color-2 h-0.5"/>
    </div>

    <Button
        class="font-semibold text-xl"
        size='auto'
        type="outline"
    >
        <div class="relative xs:flex-row">

            <img
                src={`data:image/svg+xml;utf8,${`<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" xml:space="preserve">
    <defs>
    </defs>
    <g transform="matrix(1 0 0 1 540 540)" id="777b083f-8863-4270-95d5-4a65918a6a3f"  >
    <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
    </g>
    <g transform="matrix(1 0 0 1 540 540)" id="0711da58-35ab-4fea-b85c-13732b3d58a7"  >
    </g>
    <g transform="matrix(67.5 0 0 67.5 540 540)"  >
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"  transform=" translate(-7.81, -13.9)" d="M 15.4391 14.0859 C 15.4391 18.5234 12.4078 21.6484 7.93906 21.6484 C 3.62656 21.6484 0.189063 18.2109 0.189063 13.8984 C 0.189063 9.61719 3.62656 6.14844 7.93906 6.14844 C 10.0016 6.14844 11.7828 6.92969 13.1266 8.17969 L 11.0016 10.2109 C 8.25156 7.55469 3.12656 9.55469 3.12656 13.8984 C 3.12656 16.6172 5.28281 18.8047 7.93906 18.8047 C 11.0016 18.8047 12.1578 16.6172 12.3141 15.4609 L 7.93906 15.4609 L 7.93906 12.8047 L 15.3141 12.8047 C 15.3766 13.2109 15.4391 13.5859 15.4391 14.0859 Z" stroke-linecap="round" />
    </g>
    </svg>`}`}
                class="absolute h-full left-[5%] py-1"
                alt="google-icon"
            />

            CONTINUAR CON <span class="hidden xs:inline-block">GOOGLE</span>

        </div>
    </Button>
</div>

