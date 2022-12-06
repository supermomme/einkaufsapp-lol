<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed, reactive } from "vue";
import BasicToggle from "./components/BasicToggle.vue";
import moment from 'moment'
import MdiIcon from './components/MdiIcon.vue';
import mockItems from './helpers/mockItems';


const items = ref(mockItems);

const datesWithItems = computed(() => {
  const days = []
  for (const item of items.value) {
    if (item.deadline === null) continue
    const existingDayIndex = days.findIndex(day => moment(day.day).startOf('day').isSame(moment(item.deadline).startOf('day')))
    if (existingDayIndex === -1)
      days.push({
        day: item.deadline.toDate(),
        items: [item]
      })
    else
      days[existingDayIndex].items.push(item)

  }
  days.sort((a,b) => moment(a.day).diff(moment(b.day), 'days'))
  return [
    {
      day: null,
      items: items.value.filter(item => item.deadline === null)
    },
    ...days
  ]
})

const hideDate = ref(false)
const slideoverOpen = ref(false)
const newItem = reactive({
  summary: ''
})

function toggleSlideover() {
  slideoverOpen.value = !slideoverOpen.value
}

function closeSlideover() {
  slideoverOpen.value = false
  newItem.summary = ''
}

function openSlideover() {
  slideoverOpen.value = true
}

</script>

<template>
  <!-- pull up ding -->
  <div
    :class="slideoverOpen ? 'translate-y-[100px]' : 'translate-y-[90%]'"
    class="border	border-gray-200 fixed overflow-scroll bottom-0 left-0 right-0 w-[97%] bg-white rounded-t-lg h-screen mx-auto transform transition duration-300 ease-in-out"
  >
    <div class="px-5 pb-5 flex flex-col" style="height: calc(100% - 100px);">
      <div class="flex-none flex justify-center py-3" @click="toggleSlideover">
        <span class="h-1 w-10 rounded-sm place-items-center bg-gray-400" />
      </div>
      <div class="flex-grow">
        <input @focus="openSlideover" class="bg-gray-100 rounded-lg py-1 px-2 w-full" type="text" v-model="newItem.summary" placeholder="Ich brauche . . ."/>
        <!-- vorschäge -->
        <p>bla</p>
        <p>bla</p>
        <p>bla</p>
        <p>bla</p>
        <p>bla</p>
  
      </div>
      <div class="flex-none">
        <button type="button" class="bg-gray-200 rounded-lg py-1 px-2" @click="closeSlideover">Abbrechen</button>
      </div>
    </div>
  </div>

  <!-- main content -->
  <div
    class="bg-green-gray-1 m-0 p-0 h-fit min-h-screen pb-20"
  >
    <div class="h-12 bg-white"></div>
    <div class="mx-3 mt-3 p-3 rounded-xl bg-green-gray-2">
      <div class="bg-white mt-3 p-3 rounded-xl flex items-center place-content-between">
        <span class="text-gray-600 text-xl">Datum ausblenden:</span>
        <BasicToggle class="align-middle" v-model="hideDate" active-color="green-600" />
      </div>

      <!-- Date View -->
      <div
        class="mt-6"
        v-for="day of datesWithItems"
      >
        <div class="bg-white rounded-xl px-3 py-1">
          <span class="text-base text-gray-600">{{ day.day === null ? 'Ohne Datum' : moment(day.day).format('DD.MM.YYYY') }}</span>
        </div>
        <div class="pt-2 mx-4 grid grid-cols-3 gap-4">
          <div
            v-for="item of day.items"
            class="bg-green-gray-3 w-full aspect-square rounded-md p-1 flex flex-col gap-2"
          >
            <!-- <i class="flex-1 pt-1 h-[90%] fa-regular fa-apple-whole text-black"></i> -->
            <MdiIcon class="self-center text-black flex-1 w-[70%]" :d="item.icon"/>
            <span class="flex-none h-fit self-center pb-1 text-sm text-gray-600">{{
              item.summary
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
