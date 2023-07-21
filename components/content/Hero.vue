<script setup lang="ts">
const alpine = useAppConfig().alpine

defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imagePosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section class="hero">
    <div class="layout">
      <div class="content">
        <div class="row">
          <div class="title">
            <ContentSlot :use="$slots.title" unwrap="p">
              Hero title
            </ContentSlot>
          </div>
          <NuxtImg class="title-img" :src="alpine.img.path" :alt="alpine.img.alt" :width="90" :height="90" />
        </div>
        <div class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero description
          </ContentSlot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.hero': {
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      // '@lg': {
      //   gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      // },
      '.row': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '.title': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        // gap: '{space.8}',
        maxWidth: '600px',
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
        fontWeight: '{fontWeight.italic}',
      },
      '.description': {
        marginTop: '{space.3}',
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
      },
      img: {
        width: '80px',
        height: '80px',
        alignSelf: 'flex-end',
        marginBottom: '5px',
        // aspectRatio: '1 / 1',
        // objectFit: 'cover',
        // borderRadius: '{radii.md}',
        // '&.right': {
        //   order: -1
        // }
      },
    }
  }
})
</style>
