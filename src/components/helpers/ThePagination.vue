<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="getDataList(pagination.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active': page == pagination.current_page}">
          <a class="page-link" href="#" @click.prevent="getDataList(page)">{{page}}</a>
          </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="getDataList(pagination.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'ThePaginaetion',
  props: {
    pagination: {
      type: Object
    }
  },
  data () {
    return {
      getDataList (page) {
        this.$emit('getDataList', page)
      }
    }
  },
  mounted () {
    console.log(this.pagination)
  }
}
</script>
