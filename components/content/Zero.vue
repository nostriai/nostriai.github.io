<template>
  <section class="zero">
    <div class="layout">
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Zero title
          </ContentSlot>
        </div>
        <div class="text">
          <ContentSlot :use="$slots.text" unwrap="p">
            Zero text
          </ContentSlot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.zero': {
    '.layout': {
      borderTop: '1px dashed',
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      '.title': {
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
        fontWeight: '{fontWeight.bold}',
        marginTop: '1em',
      },
      '.text': {
        marginTop: '{space.3}',
        marginBottom: '{space.5}',
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.md.lineHeight}',
      },
      '.light &': {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderColor: '#1c1d1d',
      },
      '.dark &': {
        backgroundColor: '#000000',
        color: '#ffffff',
        borderColor: '#6D6e71',
      }
    }
  }
})
</style>
