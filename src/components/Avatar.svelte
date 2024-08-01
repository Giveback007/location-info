<!-- https://merakiui.com/components/application-ui/avatars -->
<script lang="ts">
type AvatarSize = 's' | 'm' | 'l' | 'xl' | '2xl';
type Props = {
    size: AvatarSize;
    src: string;
    class: string;
}

let {
    size,
    src = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100",
    class: _class,
    // ...props
}: Props = $props();

const sizeToClass: { [K in AvatarSize]: string } = {
   's': 'w-6 h-6',
   'm': 'w-8 h-8',
   'l': 'w-10 h-10',
   'xl': 'w-12 h-12',
   '2xl': 'w-16 h-16',
}

const className = `object-cover ${sizeToClass[size]} rounded-full ring ring-gray-300 dark:ring-gray-600 ${_class}`;
</script>

<div class="flex items-center gap-x-6">
    <img class={className} src={src} alt="">
</div>