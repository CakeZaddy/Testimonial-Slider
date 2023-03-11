const testimonials = [
  {
    name: 'Ricky M',
    photoUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    text: 'I love music. Absolutely wonderful! Just what I was looking for. We have seen amazing results already.',
  },
  {
    name: 'Evangelia K',
    photoUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text: 'I made back the purchase price in just 48 hours! Music is the most valuable business resource we have EVER purchased. Music is the real deal! We have no regrets!',
  },
  {
    name: 'Wenonah N',
    photoUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text: "I would also like to say thank you to all your staff. I don't always clop, but when I do, it's because of music.",
  },
]

const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const usernameEl = document.querySelector('.username')

let idx = 0

updateTestimonial()

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx]
  imgEl.src = photoUrl
  textEl.innerText = text
  usernameEl.innerText = name
  idx++
  if (idx === testimonials.length) {
    idx = 0
  }
  setTimeout(() => {
    updateTestimonial()
  }, 10000)
}
