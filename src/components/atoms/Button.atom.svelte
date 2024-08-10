<script lang="ts">
    import type { Snippet } from "svelte";
    import { Button } from "bits-ui";
    import type { MouseEventHandler } from "svelte/elements";

    type BtnTypes = 'outline' | 'cta';

    // let isHover = $state(false)
    // let isClick = $state(false)

    const sizeMap: obj<str, Size | 'auto'> = { xs: 'text-xs p-0.5 px-1', sm: 'text-sm p-1 px-2', md: 'text-base p-1.5 px-3', lg: 'text-lg p-2 px-4', xl: 'text-xl p-2.5 px-5', auto: 'px-2 py-4 h-full w-full'};
    const typeMap: obj<str ,BtnTypes> = {
        outline: 'bg-white  text-black border-2 border-solid hover:bg-slate-50 active:bg-slate-100 border-black',
        cta: 'bg-app-cta-1 hover:bg-app-cta-1-hv active:bg-app-cta-1-cl text-white'
    };

    const {
        children,

        class: className = '',
        size = 'md',
        type = 'cta',

        disabled,
        htmlType,
        ...rest
    }: {
        children: Snippet;
        onclick?: MouseEventHandler<HTMLButtonElement> | undefined | null;
        class?: str;
        size?: Size | 'auto';
        type?: BtnTypes;

        disabled?: bol;
        htmlType?: 'reset' | 'submit' | 'button';
    } = $props();
</script>

<!-- onmousedown={() => isClick = disabled ? false : true}
onmouseup={() => isClick = false}

onmouseenter={() => isHover = disabled ? false : true}
onmouseleave={() => isHover = false} -->
<Button.Root
    class={`${sizeMap[size]} ${typeMap[type]} ${className}`}



    disabled={disabled}
    type={htmlType}
    {...rest}
>
    {@render children()}
</Button.Root>