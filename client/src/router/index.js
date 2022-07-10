import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/project/recruit",
    name: "projectRecruit",
    component: () =>
      import(
        /* webpackChunkName: "projectRecruit" */ "../views/ProjectRecruitView.vue"
      )
  },
  {
    path: "/project/review",
    name: "projectReview",
    component: () =>
      import(
        /* webpackChunkName: "projectReview" */ "../views/ProjectReviewView.vue"
      )
  },
  {
    path: "/mentolist",
    name: "mentolist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mentolist" */ "../views/MentoListView.vue")
  },
  {
    path: "/project/recruit/:projectId",
    name: "projectdetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "projectdetail" */ "../views/ProjectDetailView.vue"
      )
  },
  {
    path: "/reviewdetail",
    name: "reviewdetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "reviewdetail" */ "../views/ReviewDetailView.vue"
      )
  },
  {
    path: "/mypageinfo",
    name: "MyPageView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/MyPageView.vue")
  },
  {
    path: "/teamManage",
    name: "teamManage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/TeamManageView.vue")
  },
  {
    path: "/write",
    name: "write",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/RecruitWriteView.vue")
  },
  {
    path: "/mentorregister",
    name: "MentoRegister",
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/MentorRegisterView.vue")
  },
  {
    path: "/mentoringapply",
    name: "MentoApplyView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "mypage" */ "../components/MentoringApply.vue"
      )
  },
  {
    path: "/userprofile",
    name: "UserProfile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../components/UserProfile.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
