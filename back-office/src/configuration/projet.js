import ImgDefault from '@/assets/imgs/default.png'
import { UploadFile } from '@/api/file'
import { v4 as uuidv4 } from 'uuid'

export const PROJET_DEFAULT = {
  date: new Date(),
  desc: '',
  errorDesc: '',
  image: {
    data: ImgDefault,
    file: null
  },
  errorImage: '',
  projectDetailsGallery: [],
  projectDetailsInfo: {
    lists: [
      {
        desc: new Date(),
        label: 'Date du projet:',
        error: ''
      },
      {
        desc: '',
        label: 'Lieu:',
        error: ''
      },
      {
        desc: '',
        label: 'Secteur d\'activité:',
        error: ''
      },
      {
        desc: '',
        label: 'Budget:',
        error: ''
      },
      {
        desc: '',
        label: 'Acteurs:',
        error: ''
      }
    ],
    title: 'Information sur le projet'
  },
  title: '',
  errorTitle: '',
  extend: {
    uuid: uuidv4()
  },
  validate: function () {
    let isValid = true
    if (!this.desc) {
      this.errorDesc = 'Valeur obligatoire'
      isValid = false
      setTimeout(() => { this.errorDesc = '' }, 4000)
    }
    if (!this.title) {
      this.errorTitle = 'Valeur obligatoire'
      isValid = false
      setTimeout(() => { this.errorTitle = '' }, 4000)
    }
    if (!this.image.data) {
      this.errorImage = 'Valeur obligatoire'
      isValid = false
      setTimeout(() => { this.errorImage = '' }, 4000)
    }
    if (!this.image.file) {
      this.errorImage = 'Valeur obligatoire'
      isValid = false
      setTimeout(() => { this.errorImage = '' }, 4000)
    }
    this.projectDetailsInfo.lists.forEach(el => {
      if (!el.desc) {
        el.error = 'Valeur obligatoire'
        isValid = false
        setTimeout(() => { el.error = '' }, 4000)
      }
    })
    return isValid
  },
  getDataProjet: async function () {
    const [url] = (await UploadFile([this.image.file], `projet_${this.extend.uuid}`)).data
    const lists = []
    this.projectDetailsInfo.lists.forEach(list => {
      lists.push({
        desc: list.desc,
        label: list.label
      })
    })
    const projectDetailsGallery = []
    if (this.projectDetailsGallery.length) {
      const urls = (await UploadFile(
        this.projectDetailsGallery.map(p => p.image.file),
        `projet_${this.extend.uuid}_gallery`)).data
      urls.forEach((url) => {
        projectDetailsGallery.push({
          image: url
        })
      })
    }
    return {
      title: this.title,
      date: this.date,
      desc: this.desc,
      image: url,
      projectDetailsGallery: projectDetailsGallery,
      projectDetailsInfo: {
        title: this.projectDetailsInfo.title,
        lists
      },
      extend: this.extend
    }
  },
  setDataProjet: async function (projet) {
    this.date = new Date(projet.date)
    this.desc = projet.desc
    this.image.data = projet.image
    this.projectDetailsGallery = projet.projectDetailsGallery.map(g => ({
      image: {
        data: g.image,
        file: null
      }
    }))
    this.projectDetailsInfo.lists.forEach((l, i) => {
      if (i === 0) {
        l.desc = new Date(projet.projectDetailsInfo.lists[i].desc)
      } else l.desc = projet.projectDetailsInfo.lists[i].desc
      l.label = projet.projectDetailsInfo.lists[i].label
    })
    this.projectDetailsInfo.title = projet.projectDetailsInfo.title
    this.title = projet.title
    this.extend = projet.extend
  },
  initDataProjet: async function () {
    this.date = new Date()
    this.desc = ''
    this.image.data = ImgDefault
    this.projectDetailsGallery = []
    this.projectDetailsInfo.lists.forEach((l, i) => {
      if (i === 0) {
        l.desc = new Date()
      } else l.desc = ''
    })
    this.projectDetailsInfo.title = 'Information sur le projet'
    this.title = ''
    this.extend = {
      uuid: uuidv4()
    }
  }
}
