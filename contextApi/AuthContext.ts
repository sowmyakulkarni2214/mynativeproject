"use client"
// import { AuthRoutes } from "@/route_config/config";
import createDataContext from "./CreateDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



import axios from "axios";
// import { currentSceneType } from "@/app/tourpanel/page";
// import { avatarCharacterType } from "@/app/avatarpanel/page";
// import { googleLogout } from "@react-oauth/google";
import { io, Socket } from "socket.io-client";
// import { userData } from "three/examples/jsm/nodes/Nodes.js";
import { DateTime } from "luxon";
import { instance } from "@/api/baseUrlConfig";
// import { enqueueSnackbar } from "notistack";

export type notificationType = {
  body_template_id: { content: string },
  // content:string,
  created_at: string,
  data: [],
  seen: boolean,
  title: string,
  type_id: number,
  updated_at: string,
  visited: boolean,
  user_id: string,
  tour_id: string,
  _id: string,
  body: string,
}
// axios.defaults.withCredentials=true
// Reducers

export type stateType = {
  userData: { _id: string, email: string, name: string, photo: string, signup_method: number, token: string, gender: string, about: string, address: string },
  getUserDetails: {},
  userToken: string | null,
  isLoading: boolean,
  isSignout: boolean,
  ads: [],
  profiles: [],
  allCategory: [],
  isSignIn: boolean,
  adBookmarks: [],
  adsCount: number,
  myAds: [],
  otherAds: [],
  myAdsCount: number,
  otherAdsCount: number,
  ongoing: [],
  ongoingCount: number,
  accepted: [],
  acceptedCount: number,
  rejected: [],
  rejectedCount: number,
  bestMatches: [],
  bestMatchesCount: number,
  businessBookmarks: [],
  notifications: [],
  badgeCount: number,
  notif_Count: number,
  socket: Socket<any, any> | null,
  notificationPerm: boolean,
  chats: [],
  all_nseen: {},
  message_notification: number,
  total_chats: number,
  block_list: [],
  isSubscribed: boolean,
  plan_id: number,
  subscription_start: string,
  subscription_end: string,
  cancel_request: boolean,
  subscription_method: null,
  next_billing_time: null,
  subscription_id: null,
  isTrial: null,
  trial_start: null,
  trial_end: null,
  all_reviews: [],
  all_reviews_count: number,
  ad_bookmark_count: number,
  business_bm_count: number,
  paypal_payment: boolean,
  notifCurrentDate: string,
  allMeets: [],
  allMeetCount: number,
  allMeetInvites: [],
  allMeetInvitesCount: number,
  friendList: [],
  friend_count: number,
  meetTravelStart: boolean,
  destinationCord: null,
  meetName: string,
  meetId: null,
  LWPRef: null,
  currentLN: string,
  isMyMeet: boolean,
  meetDeleteCount: number,
  updateMyMeet: boolean,
  updateMeetInvite: boolean,
  backgroundMeetData: {},
  allFriendCount: number,
  isSideBarNavOpen: boolean,
  // stagingAvatarData:{avatar_file:avatarCharacterType|null,avatar_speech:string,scene:currentSceneType,tour_id:string,avatar_speech_type:number,avatar_audio:string,avatar_audio_file:File|null,avatarAnimation:{_id:string,name:string,animation:string}},
  avatar_list: string[],
  staging_subscription: { price_id: string, plan_id: string, plan_type_id: string, plan_name: string, plan_price: string, plan_interval: string, address: string, state: string, country: string }
  sideSubMenuDropDown: boolean,
  userSubscriptionData: {
    user_id: string,
    plan_type_id: string,
    stripe_cus_id: string,
    plan_id: string,
    stripe_plan_id: string,
    isSubscribed: boolean,
    isTrial: boolean,
    subscription_id: string,
    subscription_method: number,
    cancel_request: boolean,
    subscription_start: string,
    subscription_end: string,
    trial_start: string,
    trial_end: string,
    next_billing_time: string,
    interval: string,
    subscriptionPlanName: string,
  },
  notificationData: notificationType[],
  notificationCount: number,
  notificationBadgeCount: number,
  editedAvatarId: string,
  refreshAvatarList: boolean,
  currentQID: string,
  allIds: string[]
}
type actionType = {
  type: string,
  payload: any,
  [key: string]: string | any
}

export type authReducerType = (state: stateType, action: actionType) => (stateType)
export type actionFunctionType = (dispatch: React.Dispatch<actionType>) => (fn: any) => Promise<void>
export type boundAction = (fn: any) => Promise<void>
export type contextActionType = {
  signIn: actionFunctionType,
  signInWithGoogle: actionFunctionType,
  signInWithFacebook: actionFunctionType,
  signOut: actionFunctionType,
  updateUserData: actionFunctionType,
  updateUserProfile: actionFunctionType,
  updateAvatarStagingDetails: actionFunctionType,
  fetchUpdatedProfileData: actionFunctionType,

  setSignInStatus: actionFunctionType,
  setLoadingStatus: actionFunctionType,

  getNotifications: actionFunctionType,
  setNotificationSeen: actionFunctionType,
  setNotificationVisited: actionFunctionType,
  getChats: actionFunctionType,


  // modifyNotification:actionFunctionType,

  getUnseenMessages: actionFunctionType,


  verifyCode: actionFunctionType,
  getMeets: actionFunctionType,
  getMeetInvites: actionFunctionType,
  getFriendList: actionFunctionType,
  onBackgroundMeet: actionFunctionType,


  setSingleMeetMessageNotSeen: actionFunctionType,
  // setNotificationBadgeCount :actionFunctionType,
  toggleSideBar: actionFunctionType,
  setStagingSubscription: actionFunctionType,
  toggleSideSubMenu: actionFunctionType,
  updateUserActivity: actionFunctionType,
  setSocket: actionFunctionType,
  setNotificationPerm: actionFunctionType,
  setNotificationData: actionFunctionType,
  setNotificationCount: actionFunctionType,
  setNotificationBadgeCount: actionFunctionType,
  setNotificationMessage: actionFunctionType,
  setEditedAvatarId: actionFunctionType,
  onRefreshAvatarList: actionFunctionType,
  setCurrentQId: actionFunctionType,
  setIds: actionFunctionType





  [key: string]: actionFunctionType
}
export type boundActionType = {
  signIn: boundAction,
  signInWithGoogle: boundAction,
  signInWithFacebook: boundAction,
  signOut: boundAction,
  updateUserData: boundAction,
  createTour: boundAction,
  updateTour: boundAction,
  createLinkage: boundAction,
  updateLinkage: boundAction,
  removeLinkage: boundAction,
  createInfospot: boundAction,
  removeInfospot: boundAction,
  updateInfospot: boundAction,
  createPanoImage: boundAction,
  updateCameraConfig: boundAction,
  updatePanoImage: boundAction,
  updateSceneOrder: boundAction,
  updateAvatarStagingDetails: boundAction,
  updateUserProfile: boundAction,
  fetchUpdatedProfileData: boundAction,

  setSignInStatus: boundAction,
  setLoadingStatus: boundAction,

  getNotifications: boundAction,
  setNotificationSeen: boundAction,
  setNotificationVisited: boundAction,
  getChats: boundAction,
  toggleSideBar: boundAction,
  toggleSideSubMenu: boundAction,
  updateUserActivity: boundAction,



  // modifyNotification:actionFunctionType,

  getUnseenMessages: boundAction,


  verifyCode: boundAction,
  getMeets: boundAction,
  getMeetInvites: boundAction,
  getFriendList: boundAction,
  onBackgroundMeet: boundAction,


  setSingleMeetMessageNotSeen: boundAction,
  // setNotificationBadgeCount :boundAction,
  setStagingSubscription: boundAction,
  setSocket: boundAction,
  setNotificationPerm: boundAction,
  setNotificationData: boundAction,
  setNotificationCount: boundAction,
  setNotificationBadgeCount: boundAction,
  setNotificationMessage: boundAction,
  setEditedAvatarId: boundAction,
  onRefreshAvatarList: boundAction,
  setCurrentQId: boundAction,
  setIds: boundAction

  [key: string]: boundAction
}
export const initialBoundActions = {
  signIn: async () => { },
  signInWithGoogle: async () => { },
  signInWithFacebook: async () => { },
  signOut: async () => { },
  updateUserData: async () => { },
  createTour: async () => { },
  updateTour: async () => { },
  createLinkage: async () => { },
  removeLinkage: async () => { },
  updateLinkage: async () => { },
  createInfospot: async () => { },
  removeInfospot: async () => { },
  updateInfospot: async () => { },
  createPanoImage: async () => { },
  updatePanoImage: async () => { },
  updateCameraConfig: async () => { },
  updateSceneOrder: async () => { },
  updateAvatarStagingDetails: async () => { },
  updateUserProfile: async () => { },
  fetchUpdatedProfileData: async () => { },

  setSignInStatus: async () => { },
  setLoadingStatus: async () => { },

  getNotifications: async () => { },
  setNotificationSeen: async () => { },
  setNotificationVisited: async () => { },
  getChats: async () => { },




  // modifyNotification:actionFunctionType,

  getUnseenMessages: async () => { },


  verifyCode: async () => { },
  getMeets: async () => { },
  getMeetInvites: async () => { },
  getFriendList: async () => { },
  onBackgroundMeet: async () => { },


  setSingleMeetMessageNotSeen: async () => { },
  // setNotificationBadgeCount :async()=>{},
  toggleSideBar: async () => { },
  setStagingSubscription: async () => { },
  toggleSideSubMenu: async () => { },
  updateUserActivity: async () => { },
  setSocket: async () => { },
  setNotificationPerm: async () => { },
  setNotificationData: async () => { },
  setNotificationCount: async () => { },
  setNotificationBadgeCount: async () => { },
  setNotificationMessage: async () => { },
  setEditedAvatarId: async () => { },
  onRefreshAvatarList: async () => { },
  setCurrentQId: async () => { },
  setIds: async () => { }
}
const AuthReducer: authReducerType = (state: stateType, action: actionType): stateType => {
  if (action.type === "SIGN_IN") {
    return {
      ...state,
      isSignout: false,
      userToken: action.payload,
      ads: [],
      profiles: [],
      isSignIn: true
    };
  } else if (action.type === "SIGN_OUT") {
    return {
      ...state,
      userData: { _id: "", email: "", name: "", photo: "", token: "", signup_method: -1, gender: "", about: "", address: "" },
      getUserDetails: [],
      isSignout: true,
      userToken: null,
      ads: [],
      profiles: [],
      allCategory: [],
      isSignIn: false,
      adBookmarks: [],
      adsCount: 0,
      myAds: [],
      otherAds: [],
      myAdsCount: 0,
      otherAdsCount: 0,
      ongoing: [],
      accepted: [],
      rejected: [],
      ongoingCount: 0,
      acceptedCount: 0,
      rejectedCount: 0,
      businessBookmarks: [],
      notifications: [],
      badgeCount: 0,
      notif_Count: 0,
      chats: [],
      all_nseen: {},
      message_notification: 0,
      total_chats: 0,
      block_list: [],
      plan_id: 0,
      isSubscribed: false,
      subscription_start: "",
      subscription_end: "",
      cancel_request: false,
      subscription_method: null,
      next_billing_time: null,
      subscription_id: null,
      isTrial: null,
      trial_start: null,
      trial_end: null,
      all_reviews: [],
      all_reviews_count: 0,
      ad_bookmark_count: 0,
      business_bm_count: 0,
      paypal_payment: false,
      notifCurrentDate: "",
      allMeets: [],
      allMeetCount: 0,
      allMeetInvites: [],
      allMeetInvitesCount: 0,
      friendList: [], friend_count: 0,
      meetTravelStart: false,
      destinationCord: null,
      meetName: "",
      meetId: null,
      LWPRef: null,
      currentLN: "",
      isMyMeet: false,
      meetDeleteCount: 0,
      updateMyMeet: false,
      updateMeetInvite: false,
      backgroundMeetData: {},
      allFriendCount: 0,
      isSideBarNavOpen: true,
      sideSubMenuDropDown: false,
      // stagingAvatarData:{avatar_file:null,avatar_speech:"",scene:{scene_id:"",order:0,title:"",max_zoom:10,min_zoom:1},tour_id:"",avatar_speech_type:32,avatar_audio:"",avatar_audio_file:null,avatarAnimation:{_id:"",animation:"",name:""}},
      staging_subscription: { price_id: "", plan_id: "", plan_type_id: "", plan_name: "", plan_price: "", plan_interval: "", address: "", state: "", country: "US" },
      userSubscriptionData: {
        user_id: "",
        stripe_cus_id: "",
        plan_id: "",
        plan_type_id: "",
        stripe_plan_id: "",
        isSubscribed: false,
        isTrial: false,
        subscription_id: "",
        subscription_method: -1,
        cancel_request: false,
        subscription_start: "",
        subscription_end: "",
        trial_start: "",
        trial_end: "",
        next_billing_time: "",
        subscriptionPlanName: "",
        interval: "",
      },
      socket: null,
      notificationData: [],
      notificationCount: 0,
      notificationBadgeCount: 0,
      editedAvatarId: "",
      refreshAvatarList: false,
      allIds: [],
      currentQID: ""


    };
  } else if (action.type === "USER_DATA") {
    return {
      ...state,
      userData: action.payload,
      isSignIn: true,

    };
  } else if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  } else if (action.type === "UPDATE_PROFILE") {
    return {
      ...state,
      getUserDetails: action.payload,
    };
  }
  else if (action.type === "GET_ALL_PROFILE") {
    return {
      ...state,
      profiles: action.payload,
    };
  }
  else if (action.type === "GET_CATEGORY") {
    return {
      ...state,
      allCategory: action.payload,
    };
  } else if (action.type === "SIGNIN_STATUS") {
    return {
      ...state,
      isSignIn: true,
      isLoading: false
    }
  } else if (action.type === "LOADING_STATUS") {
    return {
      ...state,

      isLoading: action.payload
    }
  } else if (action.type == "CLEAR_AD_BOOKMARK") {
    return {
      ...state,
      adBookmarks: [],
      ad_bookmark_count: 0
    }
  }
  else if (action.type == "CLEAR_MY_ADS") {
    return {
      ...state,
      myAds: [],
      myAdsCount: 0
    }
  } else if (action.type == "CLEAR_OTHER_ADS") {
    return {
      ...state,
      otherAds: [],
      otherAdsCount: 0
    }
  } else if (action.type == "CLEAR_ADS") {
    return {
      ...state,
      ads: [],
      adsCount: 0
    }
  }
  else if (action.type == "ONGOING_CLEAR") {
    return {
      ...state,
      ongoing: [],
      ongoingCount: 0
    }

  }
  else if (action.type == "ACCEPTED_CLEAR") {
    return {
      ...state,
      accepted: [],
      acceptedCount: 0
    }

  }
  else if (action.type == "REJECTED_CLEAR") {
    return {
      ...state,
      rejected: [],
      rejectedCount: 0,
    }

  }



  else if (action.type == "CLEAR_BM") {
    return {
      ...state,
      bestMatches: [],
      bestMatchesCount: 0
    }
  } else if (action.type == "CLEAR_BUSINESS_BM") {

    return {
      ...state,
      businessBookmarks: [],
      business_bm_count: 0
    }
  }
  else if (action.type == "BADGE") {


    return {
      ...state,
      badgeCount: action.payload
    }
  } else if (action.type == "CLEAR_NOTIFICATION") {
    return {
      ...state,
      notificationData: [],
      notificationCount: 0,
      notificationBadgeCount: 0
    }
  } else if (action.type == "SET_NSEEN") {
    return {
      ...state,
      all_nseen: action.payload
    }
  } else if (action.type == "CLEAR_NSEEN") {
    return {
      ...state,
      all_nseen: {}
    }
  } else if (action.type == "SET_MNC") {

    return {
      ...state,
      message_notification: 1 + (state.message_notification)
    }
  } else if (action.type == "CLEAR_SOCKET") {

    return {
      ...state,
      socket: null
    }
  } else if (action.type == "SET_TOTAL_CHATS") {
    return {
      ...state,
      total_chats: action.payload
    }
  } else if (action.type == "CLEAR_TOTAL_CHATS") {
    return {
      ...state,
      total_chats: 0,
      chats: []
    }
  } else if (action.type == "BLOCK_LIST") {
    return {
      ...state,
      block_list: action.payload
    }
  } else if (action.type == "SUB_CANCEL_REQ") {
    return {
      ...state,
      cancel_request: action.payload
    }
  } else if (action.type == "CLEAR_ALL_REVIEWS") {
    return {
      ...state,
      all_reviews: [],
      all_reviews_count: 0

    }
  } else if (action.type == "PAYPAL_PAYMENT") {
    return {
      ...state,
      paypal_payment: action.payload
    }
  } else if (action.type == "SET_NOTIF_DATE") {
    return {
      ...state,
      notifCurrentDate: action.payload
    }
  }
  else if (action.type == "SET_LWP") {
    return {
      ...state,
      LWPRef: action.payload
    }
  } else if (action.type == "SET_CURRENTLN") {
    return {
      ...state,
      currentLN: action.payload
    }
  } else if (action.type == "UPDATE_AVATAR_STAGING_DETAILS") {

    return {
      ...state,
      // stagingAvatarData:action.payload
    }
  }
  else if (action.type == "SET_SIDEBAR") {
    // console.log(action.payload.value, "payload")
    if (action.payload.value != "") {

      return {
        ...state,

        isSideBarNavOpen: action.payload.value

      }

    }
    else {
      return {
        ...state,
        isSideBarNavOpen: !state.isSideBarNavOpen
      }
    }


  }
  else if (action.type == "SET_SUB_SIDEBAR") {
    // console.log(action.payload.value, "payload")
    if (action.payload.value != "") {

      return {
        ...state,

        sideSubMenuDropDown: action.payload.value

      }

    }
    else {
      return {
        ...state,
        sideSubMenuDropDown: !state.isSideBarNavOpen
      }
    }


  }
  else if (action.type == "SET_STAGING_SUBSCRIPTION") {
    // console.log(action.payload.value, "payload")
    const { price_id, address, state_name, country, plan_id, plan_name, plan_price, plan_type_id, plan_interval } = action.payload

    return {
      ...state,
      staging_subscription: { price_id, address, state: state_name, country, plan_id, plan_name, plan_price, plan_type_id, plan_interval }

    }





  }

  else if (action.type == "SET_USER_SUBSCRIPTION_DATA") {
    // console.log(action.payload.value, "payloadsub")      
    return {
      ...state,
      userSubscriptionData: { ...action.payload }
    }
  }
  else if (action.type == "SOCKET") {
    let soc = action.payload.socket
    // console.log(soc, "socket")
    soc.on("connect", () => {
      console.log(soc.id, "socketid -- aauth context")
      // soc.emit("user_online", { socket_id: soc.id, user_id:state.userData._id})

    })



    return {
      ...state,
      socket: action.payload.socket
    }
  }
  else if (action.type == "SET_NOTIFICATIONPERM") {
    // console.log(action.payload.value, "payload")      
    return {
      ...state,
      notificationPerm: action.payload.status
    }
  }

  else if (action.type == "SET_NOTIFICATION_DATA") {
    // console.log([...action.payload], "qqqqqqqqqqqqqqqq") 
    return {
      ...state,
      notificationData: [...state.notificationData, ...action.payload],
      // notificationBadgeCount:action.payload.nsCount,
      // notificationCount:action.payload.notifCount          
    }

  }

  else if (action.type == "SET_NOTIFICATION_COUNT") {
    return {
      ...state,
      notificationCount: action.payload
    }

  }
  else if (action.type == "SET_NOTIFICATION_BADGE_COUNT") {
    console.log(action.payload, "action.payload")
    return {
      ...state,
      notificationBadgeCount: action.payload
    }

  }
  else if (action.type == "SET_EDITED_AVATAR_ID") {
    console.log(action.payload, "action.payload")
    return {
      ...state,
      editedAvatarId: action.payload
    }

  }
  else if (action.type == "REFRESH_AVATARS") {
    console.log(action.payload, "action.payload")
    return {
      ...state,
      refreshAvatarList: action.payload
    }

  } else if (action.type == "UPDATE_TOKEN") {

    return {
      ...state,
      userToken: action.payload.token
    }



  }
  else if (action.type == "ALL_IDS") {
    if (action.payload.action == "add") {
      return {
        ...state,
        allIds: [...state.allIds, action.payload.id],
      };
    } else if (action.payload.action == "clear") {
      return {
        ...state,
        allIds: []
      }
    } else {
      let filter_ids = state.allIds.filter(si => (si != action.payload.id))
      return {
        ...state,
        allIds: [...filter_ids],
      };
    }


  }
  else if (action.type == "SET_CURRENTQID") {
    return {
      ...state,
      currentQID: action.payload.id,
    };
  }


  else {
    return { ...state }
  }

};

// actions (This code can be written in another file)

const verifyCode: actionFunctionType = (dispatch) => {
  return async ({ email, code, navigation, setError, setVisibleSnack, setVisibleSnackErr, setUpdateStatus, setLoading }) => {
    try {
      setLoading(true)
      // let res = await instance.post("/users/verifyemailcode",{email,code})
      // if(res.data?.verified){
      //   await AsyncStorage.setItem("user_id",res.data.userData._id.toString())
      //   await AsyncStorage.setItem("token",res.data.token)
      //   dispatch({type:"USER_DATA",payload:res.data?.userData})
      //     navigation.navigate("HomeScreen")
      // }
      setLoading(false)
    } catch (error) {

      // if(error?.response?.data?.message){
      //   setError(error.response.data.message)
      // }else{
      //   setError("Error occured")
      // }

      setVisibleSnackErr(true)
      setLoading(false)
    }
  }
}


const getMeets: actionFunctionType = (dispatch) => {
  return async ({ user_id, setLoadingMoreMeets, setRefreshMyMeet, isRefresh = false, isLoading = false, isLoadingMore = false, setLoadingMoreMyMeets, setLoading, page = 1, currentDate }) => {
    try {
      if (isRefresh) {
        setRefreshMyMeet(true)
      }
      if (isLoading) {
        setLoading(true)
      }
      if (isLoadingMore) {
        setLoadingMoreMyMeets(true)
      }
      // const token = await AsyncStorage.getItem("token");
      // let res = await instance.post("/users/getusermeets/"+page,{user_id,currentDate},{ headers: { Authorization: `Bearer ${token}` } })


      // dispatch({type:"SET_MEETS",payload:{meets:res.data.allmeet,count:res.data.allmeet_count,isRefresh}})
      if (isLoading) {
        setLoading(false)
      }
      if (isRefresh) {
        setRefreshMyMeet(false)
      }
      if (isLoadingMore) {
        setLoadingMoreMyMeets(false)
      }
    } catch (error) {

      if (isRefresh) {
        setRefreshMyMeet(false)
      }

      if (isLoading) {
        setLoading(false)
      }

      if (isLoadingMore) {
        setLoadingMoreMyMeets(false)
      }

    }
  }
}

const getMeetInvites: actionFunctionType = (dispatch) => {
  return async ({ user_id, isRefresh = false, setRefreshMeetInvite, isLoading = false, isLoadingMore = false, setLoadingMoreMeetInvites, setLoading, page = 1, currentDate, deleteCount = 0 }) => {
    try {
      if (isRefresh) {
        setRefreshMeetInvite(true)
      }
      if (isLoading) {
        setLoading(true)
      }
      if (isLoadingMore) {
        setLoadingMoreMeetInvites(true)
      }
      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/getusermeetinvites/"+page,{participant_id:user_id,currentDate,deleteCount},{ headers: { Authorization: `Bearer ${token}` } })
      // dispatch({type:"SET_MEET_INVITES",payload:{ meets: res.data.meetinvites,count:res.data.meetinvites_count,isRefresh,deleteCount:res.data.deleted_meet_count,page}})
      if (isRefresh) {
        setRefreshMeetInvite(false)
      }
      if (isLoading) {
        setLoading(false)
      }
      if (isLoadingMore) {
        setLoadingMoreMeetInvites(false)
      }
    } catch (error) {

      if (isRefresh) {
        setRefreshMeetInvite(false)
      }

      if (isLoading) {
        setLoading(false)
      }

      if (isLoadingMore) {
        setLoadingMoreMeetInvites(false)
      }


    }
  }
}

const getFriendList: actionFunctionType = (dispatch) => {
  return async ({ user_id, setLoading, isRefreshing = false, isLoadingMore = false, setRefreshing, page = 1, setLoadingMore, currentDate }) => {
    try {
      if (isRefreshing) {
        setRefreshing(true)
      } else if (isLoadingMore) {
        setLoadingMore(true)
      } else {
        setLoading(true)

      }
      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/getfriendlist/"+page,{user_id,currentDate},{ headers: { Authorization: `Bearer ${token}` } })
      // dispatch({type:"SET_FRIENDS",payload: { friends: res.data.friendList,isLoadingMore,isRefreshing,count:res.data.getfriends_count}})
      if (isRefreshing) {
        setRefreshing(false)
      } else if (isLoadingMore) {
        setLoadingMore(false)
      } else {
        setLoading(false)

      }

    } catch (error) {

      if (isRefreshing) {
        setRefreshing(false)
      } else if (isLoadingMore) {
        setLoadingMore(false)
      } else {
        setLoading(false)

      }
    }
  }
}
const onBackgroundMeet: actionFunctionType = (dispatch) => {
  return async ({ meet_id, socket, travelStart, Location, destinationCord, isPointWithinRadius, state, Speech, currentLN }) => {
    try {

    } catch (error) {

    }
  }
}
//  const onBackgroundTravelStatusChange:actionFunctionType=(dispatch)=>{
//   return ({currentTS,meet_id,LWPRef,socket,destinationCord,meetName,currentLN,isMyMeet=false,meetData={}})=>{

// if(!currentTS){

// }


// if(currentLN){
//   dispatch({type:"SET_CURRENTLN",payload:currentLN})
// }

// dispatch({type:"TRAVEL_STATUS",payload:{currentTS,meet_id,destinationCord,meetName,isMyMeet,meetData}})

//   }
// }

// app signin function
const signIn: actionFunctionType = (dispatch) => {
  
  return async ({
    email,
    password,
    router,
    setLoading,
    setError,
    setMessage,
    pathName,
    // updateUserActivity,
    // setIsEmailVerified
  }) => {
    try {
      console.log("in sigin", email,
        password,
        router,
        setLoading,
        setError,
        setMessage,
        pathName,)
      setLoading(true);
      let response;
      response = await instance.post("/signin", {
        email,
        password,
        // request_origin: "app",
      });
      console.log(response.toString(), "sssssssssss")
      setMessage(response?.data?.message);
      // setVisibleSnackErr(true);
      // setTimeout(() => {
      //   hideModal();
      //   hideLoginModal();
      // }, 1000);
      const data = response?.data?.result;
      console.log(data.toString(), "sssssssssss")
      // const token = response?.data?.token;
      await AsyncStorage.setItem("token", data?.token.toString());
      await AsyncStorage.setItem("user_id", data?._id.toString());
      await AsyncStorage.setItem("user_email", data?.email.toString());
      await AsyncStorage.setItem("isLoggedIn", data?.isLoggedIn.toString());
      await AsyncStorage.setItem("user_name", data?.name.toString());
      await AsyncStorage.setItem("user_type", data?.user_type_id.toString());
      await AsyncStorage.setItem("status", data?.status.toString());
      // await AsyncStorage.setItem(
      //   "is_email_verified",
      //   data?.email_verified.toString()
      // );
      // console.log(data?.email_verified, "email verified check");

      dispatch({ type: "USER_DATA", payload: response?.data?.userData });
      // let socket: any | null = io(`${instanceScoket}`, {
      //   path: "/api/socketconnect",
      // });
      // dispatch({ type: "SOCKET", payload: socket });

    
      setLoading(false);  
      if(data?.user_type_id.toString() == 1){
        router.push("/(admin)/users")
      }else{
        router.push("/(session)/post");
      }
      

      setLoading(false);
      setMessage("");
      // setVisibleSnackErr(false);
      // updateUserActivity({
      //   user_id: data._id,
      //   action: `${response?.data?.message}, with email: ${data.email}`,
      //   actionUrl: pathName,
      // });
    } catch (err: any) {
      console.log(err + "");
      let errMsg = err?.response?.data?.message
        ? err?.response?.data?.message
        : err + "";
      console.log(errMsg, "email verified check");
      // if (err?.response?.data?.needVerification) {
      //   setIsEmailVerified(false);
      // }
      setError(errMsg);
      setLoading(false);
      // setVisibleSnackErr(true);
    }
  };
};

// const signIn: actionFunctionType = (dispatch) => {
//   return async ({ email, password, navigation, setLoading, setError, error, success, setSuccess, setNeedEmailVerification, setSignUpEmail, setEmail, setPassword, setDisable, setVisibleSnackErr, mode, setMode = null, backHand, setRequireEmailVerification, router, updateUserActivity, pathName, setSocket }) => {
//     try {
//       setLoading(true)
//       // creating post request for login
//       let response
//       // if (mode == 100) {

//       response = await axios.post(process.env.apiUrl + "/api/signin", { email, password }, { withCredentials: false, });
//       console.log("inside auth context ", response.data);
//       let data = response?.data


//       try {
//         let subRes = await axios.post(process.env.apiUrl + "/api/single-user-subscription", { id: data.userData._id })
//         let subData = subRes.data.usersubscriptiondoc
//         dispatch({ type: "SET_USER_SUBSCRIPTION_DATA", payload: subData })

//       } catch (error: any) {
//         console.log(error)
//         // enqueueSnackbar(error?.response?.data?.message, {
//         //   anchorOrigin: {
//         //     horizontal: 'right',
//         //     vertical: 'bottom'
//         //   },
//         //   variant: 'success'
//         // })
//       }
//       // console.log("data rajaheeeeeeeeeee", data?.userData?._id);
//       setLoading(false)
//       try {
//         // updateUserActivity({ user_id: data?.userData?._id, action: data?.message, actionUrl: pathName })      
//       }
//       catch (error: any) {
//         // enqueueSnackbar(error?.response?.data?.message, {
//         //   anchorOrigin: {
//         //     horizontal: 'right',
//         //     vertical: 'bottom'
//         //   },
//         //   variant: 'success'
//         // })
//       }

//       try {
//         window.localStorage.setItem("token", response.data.token)
//       } catch (error: any) {
//         console.log(error);
//         // enqueueSnackbar(error?.response?.data?.message, {
//         //   anchorOrigin: {
//         //     horizontal: 'right',
//         //     vertical: 'bottom'
//         //   },
//         //   variant: 'success'
//         // })
//       }

//       dispatch({ type: "UPDATE_TOKEN", payload: { token: response.data?.token } });
//       dispatch({ type: "USER_DATA", payload: response.data.userData });
//       const returnUrl = localStorage.getItem('returnUrl');
//       localStorage.removeItem('returnUrl');
//       if (returnUrl) {
//         router.push(returnUrl)
//       }
//       else {
//         setSuccess(response?.data?.message);
//         router.push("/dashboard")
//       }
//       // } else {
//       // response = await instance.post("/users/signin", { email, mode, request_origin: "app" });

//       // }
//       // const data = response.data.result;
//       // const token = response.data.token


//       // await AsyncStorage.setItem("token", token);

//       // await AsyncStorage.setItem("user_id", data._id);
//       // await AsyncStorage.setItem("isLoggedIn", "true");
//       // await AsyncStorage.setItem("user_email", data.email);
//       // await AsyncStorage.setItem("user_firstname", data.first_name);
//       // await AsyncStorage.setItem("user_lastname", data.last_name);
//       // await AsyncStorage.setItem("next_billing_time", "null")
//       // await AsyncStorage.setItem("schedule_subscription", "false");

//       // await AsyncStorage.setItem("isSubscribed", "null")
//       // await AsyncStorage.setItem("isTrial", "null")
//       // console.log(response.data.userData,"---in auth");








//       // if (backHand) {
//       //   backHand.removeEventListener("hardwareBackPress")
//       // }
//       // setLoading(false)
//       // if (data.user_type_id && data.address) {

//       //   navigation.navigate("HomeScreen");
//       // } else {
//       //   navigation.navigate("ProfileStack")
//       // }

//       // if (mode == 100) {

//       //   setEmail("")
//       //   setPassword("")
//       //   setTimeout(() => { setDisable(false) }, 3000)
//       // } else {
//       //   setSignUpEmail("")
//       // }

//       // if(setMode){
//       //   setMode(100)
//       // }

//     } catch (err: any) {
//       // if (mode == 98) {
//       // LoginManager.logOut()
//       // }

//       // console.log(err);


//       // if (mode == 99) {
//       // GoogleSignin.signOut()
//       // }

//       setLoading(false)
//       // setDisable(false)
//       // setError(err.response.data.message)
//       // setVisibleSnackErr(true)

//       if (err?.response?.data?.message) {
//         setError(err.response.data.message)


//         // setRequireEmailVerification(true)
//       }
//       if (err?.response?.data?.needVerification) {
//         setNeedEmailVerification(true)


//         // setRequireEmailVerification(true)
//       }
//       try {
//         if (err?.response?.data?.userData?._id) {
//           // updateUserActivity({ user_id: err?.response?.data?.userData?._id, action: err.response.data.message, actionUrl: pathName })
//         }
//         else {
//           // updateUserActivity({ user_id: "", action: err?.response?.data?.message, actionUrl: pathName })

//         }
//       } catch (error) {
//         // console.log(error)
//       }
//     }
//   };
// };
const signInWithGoogle: actionFunctionType = (dispatch) => {
  return async ({ email, password, credential, navigation, setLoading, setError, setNeedEmailVerification, setSignUpEmail, setEmail, setPassword, setDisable, setVisibleSnackErr, mode, setMode = null, backHand, setRequireEmailVerification, router, updateUserActivity, pathName, setSocket }) => {
    try {
      setLoading(true)
      // creating post request for login
      let response
      // if (mode == 100) {

      response = await axios.post(process.env.apiUrl + "/api/signin-google", { credential });
      console.log("inside auth context", response);
      try {
        let subRes = await axios.post(process.env.apiUrl + "/api/single-user-subscription", { id: response.data.userData._id })
        let subData = subRes.data.usersubscriptiondoc
        dispatch({ type: "SET_USER_SUBSCRIPTION_DATA", payload: subData })

      } catch (error) {

      }
      setLoading(false)
      try {
        updateUserActivity({ user_id: response?.data?.userData?._id, action: response?.data?.message, actionUrl: pathName })
      } catch (error) {
        // console.log(error)
      }
      const returnUrl = localStorage.getItem('returnUrl');
      localStorage.removeItem('returnUrl');
      if (returnUrl) {
        router.push(returnUrl)
      }
      else {
        router.push("/")
      }
      // router.push("/")
      // } else {
      // response = await instance.post("/users/signin", { email, mode, request_origin: "app" });

      // }
      // const data = response.data.result;
      // const token = response.data.token


      // await AsyncStorage.setItem("token", token);

      // await AsyncStorage.setItem("user_id", data._id);
      // await AsyncStorage.setItem("isLoggedIn", "true");
      // await AsyncStorage.setItem("user_email", data.email);
      // await AsyncStorage.setItem("user_firstname", data.first_name);
      // await AsyncStorage.setItem("user_lastname", data.last_name);
      // await AsyncStorage.setItem("next_billing_time", "null")
      // await AsyncStorage.setItem("schedule_subscription", "false");

      // await AsyncStorage.setItem("isSubscribed", "null")
      // await AsyncStorage.setItem("isTrial", "null")
      console.log(response.data.userData, "---in auth");

      dispatch({ type: "USER_DATA", payload: response.data.userData });







      // if (backHand) {
      //   backHand.removeEventListener("hardwareBackPress")
      // }
      // setLoading(false)
      // if (data.user_type_id && data.address) {

      //   navigation.navigate("HomeScreen");
      // } else {
      //   navigation.navigate("ProfileStack")
      // }

      // if (mode == 100) {

      //   setEmail("")
      //   setPassword("")
      //   setTimeout(() => { setDisable(false) }, 3000)
      // } else {
      //   setSignUpEmail("")
      // }

      // if(setMode){
      //   setMode(100)
      // }

    } catch (err: any) {
      // if (mode == 98) {
      // LoginManager.logOut()
      // }

      console.log(err);

      // if (mode == 99) {
      // GoogleSignin.signOut()
      // }

      setLoading(false)

      try {
        // googleLogout()
      } catch (error) {

      }
      // setDisable(false)
      // setError(err.response.data.message)
      // setVisibleSnackErr(true)

      if (err?.response?.data?.message) {
        setError(err.response.data.message)


        // setRequireEmailVerification(true)
      }
      if (err?.response?.data?.needVerification) {
        setNeedEmailVerification(true)


        // setRequireEmailVerification(true)
      }
      try {
        if (err?.response?.data?.userData?._id) {
          updateUserActivity({ user_id: err?.response?.data?.userData?._id, action: err.response.data.message, actionUrl: pathName })
        }
        else {
          updateUserActivity({ user_id: "", action: err?.response?.data?.message, actionUrl: pathName })

        }
      } catch (error) {
        // console.log(error)
      }




    }
  };
};
const signInWithFacebook: actionFunctionType = (dispatch) => {
  return async ({ email, password, access_token, navigation, setLoading, setError, setNeedEmailVerification, setSignUpEmail, setEmail, setPassword, setDisable, setVisibleSnackErr, mode, setMode = null, backHand, setRequireEmailVerification, router, updateUserActivity, pathName, setSocket }) => {
    try {
      setLoading(true)
      // creating post request for login
      let response
      // if (mode == 100) {

      response = await axios.post(process.env.apiUrl + "/api/signin-facebook", { access_token });
      console.log("inside auth context ");
      try {
        let subRes = await axios.post(process.env.apiUrl + "/api/single-user-subscription", { id: response.data.userData._id })
        let subData = subRes.data.usersubscriptiondoc
        dispatch({ type: "SET_USER_SUBSCRIPTION_DATA", payload: subData })

      } catch (error) {

      }
      setLoading(false)
      try {
        updateUserActivity({ user_id: response?.data?.userData?._id, action: response?.data?.message, actionUrl: pathName })
      } catch (error) {
        // console.log(error)
      }

      const returnUrl = localStorage.getItem('returnUrl');
      localStorage.removeItem('returnUrl');
      if (returnUrl) {
        router.push(returnUrl)
      }
      else {
        router.push("/")
      }

      // router.push("/")
      // } else {
      // response = await instance.post("/users/signin", { email, mode, request_origin: "app" });

      // }
      // const data = response.data.result;
      // const token = response.data.token


      // await AsyncStorage.setItem("token", token);

      // await AsyncStorage.setItem("user_id", data._id);
      // await AsyncStorage.setItem("isLoggedIn", "true");
      // await AsyncStorage.setItem("user_email", data.email);
      // await AsyncStorage.setItem("user_firstname", data.first_name);
      // await AsyncStorage.setItem("user_lastname", data.last_name);
      // await AsyncStorage.setItem("next_billing_time", "null")
      // await AsyncStorage.setItem("schedule_subscription", "false");

      // await AsyncStorage.setItem("isSubscribed", "null")
      // await AsyncStorage.setItem("isTrial", "null")
      console.log(response.data.userData, "---in auth");

      dispatch({ type: "USER_DATA", payload: response.data.userData });







      // if (backHand) {
      //   backHand.removeEventListener("hardwareBackPress")
      // }
      // setLoading(false)
      // if (data.user_type_id && data.address) {

      //   navigation.navigate("HomeScreen");
      // } else {
      //   navigation.navigate("ProfileStack")
      // }

      // if (mode == 100) {

      //   setEmail("")
      //   setPassword("")
      //   setTimeout(() => { setDisable(false) }, 3000)
      // } else {
      //   setSignUpEmail("")
      // }

      // if(setMode){
      //   setMode(100)
      // }

    } catch (err: any) {
      // if (mode == 98) {
      // LoginManager.logOut()
      // }

      console.log(err);

      // if (mode == 99) {
      // GoogleSignin.signOut()
      // }
      try {
        // window.fbAsyncInit()
        // window.FB.logout((res:any)=>{
        //   console.log("facebook logout success");

        // })
      } catch (error) {

      }

      setLoading(false)
      // setDisable(false)
      // setError(err.response.data.message)
      // setVisibleSnackErr(true)

      if (err?.response?.data?.message) {
        setError(err.response.data.message)


        // setRequireEmailVerification(true)
      }
      if (err?.response?.data?.needVerification) {
        setNeedEmailVerification(true)


        // setRequireEmailVerification(true)
      }

    }
  };
};

const fetchUpdatedProfileData: actionFunctionType = (dispatch) => {
  return async ({ setUpdateStatus, profileUpdated = false, navigation, setDisable, initialData }) => {
    try {
      // const email = await AsyncStorage.getItem("email");
      // const id = await AsyncStorage.getItem("user_id");

      // const token = await AsyncStorage.getItem("token");
      // const response = await instance.post("/users/getsingleuser", { id }, { headers: { Authorization: `Bearer ${token}` } });


      // dispatch({ type: "USER_DATA", payload: response.data.user });
      setDisable(false)


      navigation.navigate("HomeScreen")


      if (profileUpdated) {


      }
    } catch (err) {

      setDisable(false)

      // console.warn(err.response.data.message);

    }
  };
};

// app signout
const signOut: actionFunctionType = (dispatch) => {
  return async ({
    navigation,
    user_id,
    socket,
    mode,
    router,
    signup_method,
    updateUserActivity,
    pathName,
  }) => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        let res = await instance.post(
          "/api/signout",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // console.log(res.data.userData, "aaaaa");
      } else {
        console.log("no token");
      }
      // socket.disconnect()

      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user_id");
      await AsyncStorage.removeItem("user_email");
      await AsyncStorage.removeItem("isSignIn");
      await AsyncStorage.removeItem("isSignInApp");
      // await AsyncStorage.setItem("isSignIn", "false");

      await AsyncStorage.removeItem("status");
      await AsyncStorage.removeItem("user_name");
      await AsyncStorage.removeItem("signup_method");
      await AsyncStorage.removeItem("user_type_id");
      await AsyncStorage.removeItem("applyBtnClk");
      await AsyncStorage.removeItem("waitlistJoinBtnClk");
      await AsyncStorage.removeItem("proceedToBookNow");
      // await AsyncStorage.setItem(
      //   "signup_method",
      //   data.signup_method.toString()
      // );
      dispatch({ type: "SIGN_OUT", payload: {} });

      // if (mode == 58) {
      // isko kholna hai
      // GoogleSignin.signOut()
      // }
      // if (mode == 59) {
      //   isko kholna hai
      //  LoginManager.logOut()
      // }

      dispatch({ type: "CLEAR_SOCKET", payload: {} });
      // if (signup_method == 59) {
      // window.fbAsyncInit()
      // window.FB.logout((res:any)=>{
      // console.log("facebook logout success");
      // })
      // }

      // try {
      //   updateUserActivity({
      //     user_id: res?.data?.userData?._id,
      //     action: "Signout successful",
      //     actionUrl: "/Signout",
      //   });
      // } catch (error) {
      //   console.log(error, "");
      // }
      ///////////////////////////////////
      //  let isSigninGoogle =  GoogleSignin.getCurrentUser();
      //  if (isSigninGoogle) {
      //    await GoogleSignin.signOut();
      //  }
      ///////////////////////////////////////////
      router.push("/(no-session)/signin");

      try {
      } catch (error) { }
      // await AsyncStorage.setItem("schedule_subscription", "false")

      // await instance.post("/users/signout", { user_id })

      // dispatch({ type: "SIGN_OUT" });
      // navigation.navigate("Login");
    } catch (error: any) {
      if (error?.response?.data?.message) {
        console.log(error?.response?.data?.message, "zzzzzzzzz");

        // setError(error.response.data.message);
        // setRequireEmailVerification(true)
      }
      console.log(error);
    }
  };
};

// const signOut: actionFunctionType = (dispatch) => {
//   return async ({ navigation, user_id, socket, mode, router, signup_method, updateUserActivity, pathName, setError, setSuccess }) => {

//     try {


//       const BG_TASK = "BACKGROUND-NOTIFICATION-TASK"
//       // await AsyncStorage.setItem("isLoggedIn", "false");
//       // const token = await AsyncStorage.getItem("token");

//       let token = window.localStorage.getItem("token")
//       let res = await axios.post(process.env.apiUrl + "/api/signout", {}, { withCredentials: false, headers: { Authorization: `Bearer ${token}` } })
//       console.log(res, "response")

//       window.localStorage.setItem("token", "")
//       try {
//         // updateUserActivity({ user_id: res?.data?.userData?._id, action: "Signout successful", actionUrl: "/Signout" })
//         // setSuccess(res.data.message);
//       } catch (error: any) {
//         console.log(error, "")
//         // enqueueSnackbar(error?.response?.data?.message, {
//         //   anchorOrigin: {
//         //     horizontal: 'right',
//         //     vertical: 'bottom'
//         //   },
//         //   variant: 'success'
//         // })
//       }
//       dispatch({ type: "UPDATE_TOKEN", payload: { token: "" } })
//       dispatch({ type: "SIGN_OUT", payload: {} })

//       // if (signup_method == 58) {
//       //   googleLogout()
//       // }

//       if (signup_method == 59) {
//         // window.fbAsyncInit()
//         // window.FB.logout((res:any)=>{
//         //   console.log("facebook logout success");

//         // })
//       }



//       // setSuccess(res.data.message);
//       // enqueueSnackbar(res?.data?.message, {
//       //   anchorOrigin: {
//       //     horizontal: 'right',
//       //     vertical: 'bottom'
//       //   },
//       //   variant: 'success'
//       // })
//       router.push("/")




//       // await AsyncStorage.setItem("user_id", "");
//       // await AsyncStorage.removeItem("user_email");
//       // await AsyncStorage.removeItem("user_firstname");
//       // await AsyncStorage.removeItem("user_lastname");
//       // await AsyncStorage.removeItem("user_mappin");
//       // await AsyncStorage.setItem("token","");
//       // await AsyncStorage.removeItem("user_photo");
//       // await AsyncStorage.removeItem("user_type_id");
//       // await AsyncStorage.setItem("isSubscribed", "null")
//       // await AsyncStorage.setItem("isTrial", "null")
//       // await AsyncStorage.setItem("next_billing_time", "null")



//       try {


//       } catch (error: any) {
//         // enqueueSnackbar(error?.response?.data?.message, {
//         //   anchorOrigin: {
//         //     horizontal: 'right',
//         //     vertical: 'bottom'
//         //   },
//         //   variant: 'success'
//         // })
//       }
//       // await AsyncStorage.setItem("schedule_subscription", "false")


//       // await instance.post("/users/signout", { user_id })

//       // dispatch({ type: "SIGN_OUT" });
//       // navigation.navigate("Login");
//     } catch (error: any) {
//       // enqueueSnackbar(error?.response?.data?.message, {
//       //   anchorOrigin: {
//       //     horizontal: 'right',
//       //     vertical: 'bottom'
//       //   },
//       //   variant: 'success'
//       // })
//     }
//   };
// };


// const updateUserData: actionFunctionType = (dispatch) => {
//   return async ({ id, router, onSignIn = false, pathName, tourData = null }) => {
//     //  const token = await AsyncStorage.getItem("token");
//     try {
//       //     const response = await axios.post(process.env.apiUrl+"/getsingleuserdata", {
//       // id
//       //     //   headers: {
//       //     //     Authorization: `Bearer ${token}`,
//       //       // },
//       //     });

//       let res = await axios.post(process.env.apiUrl + "/api/getsingleuser", {}, { withCredentials: true })

//       dispatch({ type: "UPDATE_USER_DATA", payload: res.data.result });
//       // let subRes = await axios.post(process.env.apiUrl + "/api/single-user-subscription", { id: res.data.data._id })
//       // let subData = subRes.data.usersubscriptiondoc
//       // dispatch({ type: "SET_USER_SUBSCRIPTION_DATA", payload: subData })
//       if (onSignIn) {
//         router.push("/dashboard")
//       }

//     } catch (err) {
//       // console.log(err);
//       // console.log(pathName);
//       // console.error(tourData)
//       dispatch({ type: "SIGN_OUT", payload: {} })

//       if (pathName == "/tour") {

//         if (tourData?._id) {
//           if (tourData.status != 4) {

//             router.push("/")
//           }
//         } else {
//           router.push("/")
//         }


//       }

//       // if(pathName!="/tour" && AuthRoutes[pathName]){

//       //   router.push("/")
//       // }

//     }
//   };
// };

// const updateUserData: actionFunctionType = (dispatch) => {
//   return async ({ id, router, onSignIn = false, pathName, tourData = null, setNotificationData }) => {
//     //  const token = await AsyncStorage.getItem("token");
//     try {
//       //     const response = await axios.post(process.env.apiUrl+"/getsingleuserdata", {
//       // id
//       //     //   headers: {
//       //     //     Authorization: `Bearer ${token}`,
//       //       // },
//       //     });


//       let token = window.localStorage.getItem("token")

//       let res = await axios.post(process.env.apiUrl + "/api/getsingleuser", {}, { withCredentials: false, headers: { Authorization: `Bearer ${token}` } })

//       dispatch({ type: "UPDATE_TOKEN", payload: { token } });

//       dispatch({ type: "UPDATE_USER_DATA", payload: res.data.result });
//       // -------openit afterward
//       //   let subRes = await axios.post(process.env.apiUrl+"/api/single-user-subscription",{id:res.data.data._id})
//       //   let subData = subRes.data.usersubscriptiondoc
//       // dispatch({type:"SET_USER_SUBSCRIPTION_DATA",payload:subData})

//       // -----till her
//       //     let socket:Socket<any,any> = io(`${process.env.apiUrl}`, {path:"/api/socketconnect"});   
//       // const updateNotificationData = async({user_id, page, currentDate}:{user_id:any,page:any,currentDate:any})=>{
//       //   // let user_id =res.data.data._id
//       //     if(user_id){       
//       //       dispatch({type:"CLEAR_NOTIFICATION",payload:{}})       
//       //       let res = await axios.post(process.env.apiUrl+`/api/get-user-notification/1`,{user_id, currentDate},{withCredentials:false})
//       //       console.log(res, "notification data result....")
//       //       let notificationlist = res?.data?.userNotification            
//       //       if(res?.data){      
//       //         // setNotificationBadgeCount(res?.data?.nsCount)

//       //         dispatch({type:"SET_NOTIFICATION_DATA", payload:notificationlist})  
//       //         dispatch({type:"SET_NOTIFICATION_COUNT", payload:res?.data?.notifCount})         
//       //         dispatch({type:"SET_NOTIFICATION_BADGE_COUNT", payload:res?.data?.nsCount})

//       //       }

//       //     }
//       // }
//       //     dispatch({ type: "SOCKET", payload: {socket,setNotificationData:updateNotificationData} })
//       // updateNotificationData({user_id:res?.data?.data?._id, page:1, currentDate:DateTime.now().toUTC().toISO()})
//       if (onSignIn) {
//         router.push("/dashboard")
//       }

//     } catch (err) {
//       // console.log(err);
//       // console.log(pathName);
//       // console.error(tourData)
//       dispatch({ type: "SIGN_OUT", payload: {} })

//       // if(pathName=="/tour")
//       // {

//       //   if(tourData?._id){
//       //     if(tourData.status !=4 ){

//       //       router.push("/")
//       //     }
//       //   }else{
//       // router.push("/")
//       //   }


//       // }

//       // if (AuthRoutes[pathName]) {

//       //   router.push("/")
//       // }

//     }
//   };
// };

const updateUserProfile: actionFunctionType = (dispatch) => {
  return async ({ data, setLoading, setUpdateStatus, user_status, setError, setDisable, photoData, removePhoto, photoUrl, setRemovePhoto, userData, photo }) => {
    try {
      // const token = await AsyncStorage.getItem("token");
      // const id = await AsyncStorage.getItem("user_id");
      // const usertypeid = await AsyncStorage.getItem("user_type_id");

      setLoading(true)
      // const response = await  instance.put("/users/updateuser", { ...data, id, request_origin: "app" }, { headers: { Authorization: `Bearer ${token}` } })


      if (photoData) {

        // let upres = await FileSytemUpload.uploadAsync("https://api.plannmeet.com/api/profile/img/upload", photoData.uri, {
        // fieldName: "photo",
        // uploadType: FileSytemUpload.FileSystemUploadType.MULTIPART,
        // httpMethod: "POST",
        // headers:{Authorization:`Bearer ${token}`} ,
        // parameters: { id: photoData.id,photo}

        // })



        // if (upres.status != 200) {
        //   console.log(upres.body);
        //   if (upres.body?.message) {

        //     setError(upres.body.message)
        //   } else {
        //   console.log(upres.body);
        //     setError("Profile photo upload failed, photo size might be large")
        //   }
        //   setLoading(false)
        //   setDisable(false)
        //   return
        // }

      }

      if (removePhoto && !photoData) {

        // let res = await instance.post("/removeprofilephoto", { id: userData._id.toString(),  },{headers:{Authorization:`Bearer ${token}`}})

        setRemovePhoto(false)

      }

      setLoading(false)

      setUpdateStatus("Profile updated successfully.")
    } catch (err) {
      //  console.log(err.response.data + " ", "---instance e");
      // console.log(err.response.data.message,"==");
      setLoading(false)
      setDisable(false)
      setError("Profile update failed")
    }
  };
};

const updateUserData: actionFunctionType = (dispatch) => {
  return async ({ id, router, onSignIn = false, pathName, tourData = null }) => {
    try {
      let token = await AsyncStorage.getItem("token");
      let user_id = await AsyncStorage.getItem("user_id");
      let res = await instance.post(
        "/api/getsingleuser",
        { user_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({ type: "UPDATE_USER_DATA", payload: res.data.result });
      router.push("/(session)/home")

    } catch (err) {
      dispatch({ type: "SIGN_OUT", payload: {} })

      // if (pathName == "/tour") {

      //   if (tourData?._id) {
      //     if (tourData.status != 4) {

      //       router.push("/")
      //     }
      //   } else {
      //     router.push("/")
      //   }
      // }
    }
  };
};

const setSignInStatus: actionFunctionType = (dispatch) => {
  return async ({ setLoading, router }) => {
    try {
      let token = await AsyncStorage.getItem("token");
      let user_id = await AsyncStorage.getItem("user_id");
      let userdata = await instance.post(
        "/api/getsingleuser",
        { user_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (userdata.data?.result?.isLoggedIn) {
        dispatch({ type: "USER_DATA", payload: userdata.data.result });
        dispatch({ type: "SIGNIN_STATUS", payload: {} });
        router.push("/(session)/home")
      } else {
        dispatch({ type: "LOADING_STATUS", payload: false });
        router.push("/(no-session)/signin")
      }
      setLoading(false);
    } catch (error: any) {
      dispatch({ type: "LOADING_STATUS", payload: false });
      setLoading(false);
      console.log(error?.response?.data + "ererrrrr");
    }
  };
};


// const setSignInStatus: actionFunctionType = (dispatch) => {
//   return async ({ setLoading }) => {

//     try {

//       //  let token = await AsyncStorage.getItem("token")

//       // let userid = await AsyncStorage.getItem("user_id")

//       // let userdata = await instance.post("/users/getsingleuser", { id: userid }, { headers: { Authorization: `Bearer ${token}` } })

//       // if (userdata.data.user.isLoggedIn) {


//       //   // dispatch({ type: "USER_DATA", payload: userdata.data.user })
//       //   // dispatch({ type: "SIGNIN_STATUS" })
//       // } else {
//       //   // dispatch({ type: "LOADING_STATUS", payload: false })
//       // }
//       setLoading(false)
//     } catch (error) {

//       // dispatch({ type: "LOADING_STATUS", payload: false })
//       setLoading(false)
//       console.log(error + "");
//     }

//   }
// }
const setLoadingStatus: actionFunctionType = (dispatch) => {
  return async ({ status }) => {

    try {


      // dispatch({ type: "LOADING_STATUS", payload: status })

    } catch (error) {

    }

  }
}










const getNotifications: actionFunctionType = (dispatch) => {
  return async ({ user_id, page = 1, setLoadingMore, setScrollRefresh = null, currentDate }) => {

    try {
      if (page == 1) {
        // dispatch({ type: "CLEAR_NOTIFICATION" })
      } else {
        setLoadingMore(true)
      }

      if (setScrollRefresh) {
        setScrollRefresh(true)
      }

      // let token = await AsyncStorage.getItem("token")
      // let notdata = await instance.post(`/users/getusernotifications/${page}`, { user_id ,currentDate}, { headers: { Authorization: `Bearer ${token}` } })

      // dispatch({ type: "NOTIFICATION", payload: { data: notdata.data.notifications, count: notdata.data.notifCount } })
      if (page == 1) {

        // dispatch({ type: "BADGE", payload: notdata.data.nsCount })
      } else {
        setLoadingMore(false)
      }

      if (setScrollRefresh) {
        setScrollRefresh(false)
      }

    } catch (error) {


      if (page > 1) {
        setLoadingMore(false)
      }
      if (setScrollRefresh) {
        setScrollRefresh(false)
      }

    }
  }
}

// const setNotificationSeen:actionFunctionType = (dispatch) => {




//   return async ({ user_id, notifData }) => {

//     try {


//       // let notifyIds = []

//       // notifData.forEach(e => {
//       //   if (!e.seen) {
//       //     // notifyIds.push(e._id)
//       //   }
//       // })
//       // console.log(notifyIds.length, "==noti");

//       // if (notifyIds.length) {

//       //   let token = await AsyncStorage.getItem("token")
//       //   let res = await instance.post("/users/updatenotificationseen", { user_id, notifyIds }, { headers: { Authorization: `Bearer ${token}` } })
//       //   dispatch({ type: "SET_BADGE", payload: notifyIds.length })
//       // }


//       // await Notifications.setBadgeCountAsync(0)


//     } catch (error) {
//     }
//   }




// }


const setNotificationVisited: actionFunctionType = () => {




  return async ({ user_id, notify_id }) => {


    try {

      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/updatenotificationvisited", { user_id, notify_id }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
      console.log(error);
    }
  }



}

const getChats: actionFunctionType = (dispatch) => {
  return async ({ user_id, page = 1, setLoadingMoreChats, setLoadingChat }) => {

    if (page == 1) {
      // dispatch({ type: "CLEAR_TOTAL_CHATS" })
      setLoadingChat(true)
    }

    if (page > 1) {
      setLoadingMoreChats(true)
    }

    try {


      // let token = await AsyncStorage.getItem("token")
      // let data = await instance.post(`/users/getchats/${page}`, { user_id }, { headers: { Authorization: `Bearer ${token}` } })
      // let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })



      // dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })
      // dispatch({ type: "SET_TOTAL_CHATS", payload: data.data.total_chats })
      // dispatch({ type: "CHATS", payload: data.data.chats })
      if (page > 1) {
        setLoadingMoreChats(false)
      } else {
        setLoadingChat(false)
      }
    } catch (error) {
      // console.log(error.response.data.message, "-chat ");
      if (page > 1) {
        setLoadingMoreChats(false)
      } else {
        setLoadingChat(false)
      }
    }


  }
}

// const setNotificationCount:actionFunctionType = (dispatch) => {
//   return async ({ user_id }) => {
//     try {



//       console.log("dispatch snc");
//       dispatch({ type: "SET_MNC" })
//       let token = await AsyncStorage.getItem("token")
//       let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
//       dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })
//     } catch (error) {
//     }

//   }
// }


const setSocket: actionFunctionType = (dispatch) => {

  return async ({ user_id = "", setNotificationBadgeCount, setNotificationData = () => { } }) => {
    console.log("in set socket")
    let socket: Socket<any, any> = io(`${process.env.apiUrl}`, { path: "/api/iarivchatbot" });
    // console.log(socket, "connected")
    dispatch({ type: "SOCKET", payload: { socket, setNotificationData } })
    console.log("otusodei ddjsoe --", user_id);

    if (user_id) {
      dispatch({ type: "CLEAR_NOTIFICATION", payload: {} })
      let res = await axios.post(process.env.apiUrl + `/api/get-user-notification/1`, { user_id, currentDate: DateTime.now().toUTC().toISO() }, { withCredentials: false })
      console.log(res, "notification data result....")
      let notificationlist = res?.data?.userNotification
      if (res?.data) {
        // setNotificationBadgeCount(res?.data?.nsCount)

        dispatch({ type: "SET_NOTIFICATION_DATA", payload: notificationlist })
        dispatch({ type: "SET_NOTIFICATION_COUNT", payload: res?.data?.notifCount })
        dispatch({ type: "SET_NOTIFICATION_BADGE_COUNT", payload: res?.data?.nsCount })

      }

    }

  }
}

// const modifyNotification:actionFunctionType = (dispatch) => {
//   return async ({ Notifications, data }) => {
//     try {


//       let preNoti = await Notifications.getPresentedNotificationsAsync()

//       if (!preNoti.length) {
//         return
//       }
//       let doc = preNoti.find(n => {
//         return data.request.content.data.user_id == n.request.content.data.user_id
//       })

//       if (doc) {


//         await Notifications.dismissNotificationAsync(doc.request.identifier)



//       }
//     } catch (error) {

//     }

//   }
// }


// const getBlockList:actionFunctionType = (dispatch) => {
//   return async ({ user_id }) => {

//     try {
//       let token = await AsyncStorage.getItem("token")
//       let doc = await instance.post("/users/getblocklist", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
//       dispatch({ type: "BLOCK_LIST", payload: doc.data.blocklist })
//     } catch (error) {

//     }


//   }
// }

const getUnseenMessages: actionFunctionType = (dispatch) => {
  return async ({ user_id }) => {
    try {
      // let token = await AsyncStorage.getItem("token")
      // let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
      // dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })

    } catch (error) {

    }
  }
}

const setSingleMeetMessageNotSeen: actionFunctionType = (dispatch) => {
  return async ({ user_id, meet_id }) => {
    try {
      // let token = await AsyncStorage.getItem("token")
      // let message_data = await instance.post("/users/getsinglemeetmessagenotseen", { user_id ,meet_id}, { headers: { Authorization: `Bearer ${token}` } })
      // dispatch({ type: "SET_SINGLE_NSEEN", payload: {all_nseen:message_data.data.all_nseen,meet_id} })

    } catch (error) {

    }

  }
}


// const setNotificationBadgeCount:actionFunctionType = (dispatch)=>{

//   return async({Notifications})=>{
//     try {

//       // console.log("badge count");
//     await Notifications.setBadgeCountAsync(0)

//   } catch (error) {

//     console.log(error);

//   }
// }
// }

const toggleSideBar: actionFunctionType = (dispatch) => {

  return async ({ value = "" }) => {
    // console.log("in toggleSideBar")

    try {
      // console.log("in toggleSideBar try")
      dispatch({ type: "SET_SIDEBAR", payload: { value } })


    } catch (error) {

      console.log(error);

    }
  }
}

const toggleSideSubMenu: actionFunctionType = (dispatch) => {

  return async ({ value = "" }) => {
    // console.log("in toggleSideSubMenu")

    try {
      // console.log("in toggleSideSubMenu ")
      dispatch({ type: "SET_SUB_SIDEBAR", payload: { value } })


    } catch (error) {

      console.log(error);

    }
  }
}





const updateAvatarStagingDetails: actionFunctionType = (dispatch) => {
  return async ({ avatar_file, avatar_speech, scene, tour_id, from = "", router, avatar_speech_type, avatar_audio, avatar_audio_file = null, avatarAnimation }) => {
    try {
      dispatch({ type: "UPDATE_AVATAR_STAGING_DETAILS", payload: { avatar_file, avatar_speech, scene, tour_id, avatar_speech_type, avatar_audio, avatar_audio_file, avatarAnimation } })

      if (from == "avatar_panel") {
        router.push("/tourpanel?tour_id=" + tour_id)
      }
    } catch (error) {

    }
  }
}

const setStagingSubscription: actionFunctionType = (dispatch) => {
  return async ({ price_id, plan_id, plan_name, plan_price, plan_type_id, address, state, country, plan_interval, router = null }) => {
    dispatch({ type: "SET_STAGING_SUBSCRIPTION", payload: { price_id, plan_name, plan_type_id, plan_price, plan_id, plan_interval, address, state_name: state, country } })
    if (router) {
      router.push("/checkout")
    }
  }
}
const getUserSubscriptionData: actionFunctionType = (dispatch) => {
  return async ({ user_id }) => {

    let res = await axios.post(process.env.apiUrl + "/api/single-user-subscription", { id: user_id })
    let subData = res.data.usersubscriptiondoc
    console.log(subData, "subscript")
    dispatch({ type: "SET_USER_SUBSCRIPTION_DATA", payload: subData })

  }
}

const updateUserActivity: actionFunctionType = (dispatch) => {
  return async ({ user_id, action, actionUrl }) => {
    try {

      if (user_id) {
        let res = await axios.post(process.env.apiUrl + "/api/add-user-activity", { user_id, action, actionUrl })
      }
      else {
        let res = await axios.post(process.env.apiUrl + "/api/add-user-activity", { action, actionUrl })
      }
    } catch (error) {
      console.log(error)
    }

  }
}

const setNotificationPerm: actionFunctionType = (dispatch) => {
  return async ({ status }) => {
    try {
      dispatch({ type: "SET_NOTIFICATIONPERM", payload: { status } })

    } catch (error) {

      console.log(error);

    }

  }
}

const setNotificationData: actionFunctionType = (dispatch) => {
  return async ({ user_id, page, currentDate, setNotificationBadgeCount, notificationBadgeCount }) => {
    // console.log(user_id, page, currentDate, "in authnotigggg")     
    try {

      if (user_id) {

        if (page == 1) {
          dispatch({ type: "CLEAR_NOTIFICATION", payload: {} })
        }
        let res = await axios.post(process.env.apiUrl + `/api/get-user-notification/${page}`, { user_id, currentDate }, { withCredentials: false })
        console.log(res, "notification data result....")
        let notificationlist = res?.data?.userNotification
        if (res?.data) {
          // setNotificationBadgeCount(res?.data?.nsCount)

          dispatch({ type: "SET_NOTIFICATION_DATA", payload: notificationlist })
          dispatch({ type: "SET_NOTIFICATION_COUNT", payload: res?.data?.notifCount })
          dispatch({ type: "SET_NOTIFICATION_BADGE_COUNT", payload: res?.data?.nsCount })

        }

      }

    } catch (error) {
      console.log(error)
    }

  }
}

const setNotificationBadgeCount: actionFunctionType = (dispatch) => {

  return async (value) => {
    console.log(value, "in auth")

    try {
      if (value) {
        dispatch({ type: "SET_NOTIFICATION_BADGE_COUNT", payload: value })
      }

    } catch (error) {

      console.log(error);

    }

  }
}
const setNotificationCount: actionFunctionType = (dispatch) => {
  return async ({ notificationCount }) => {
    try {
      dispatch({ type: "SET_NOTIFICATION_COUNT", payload: { notificationCount } })

    } catch (error) {

      console.log(error);

    }

  }
}

const setNotificationMessage: actionFunctionType = (dispatch) => {
  return async (notificationata) => {
    try {
      dispatch({ type: "SET_NOTIFICATION_DATA", payload: notificationata })

    } catch (error) {

      console.log(error);

    }

  }
}

const setNotificationSeen: actionFunctionType = (dispatch) => {
  return async ({ notifyIds,
    user_id,
    setNotificationBadgeCount,
    notificationBadgeCount,
    notificationData }: {
      notifyIds: [],
      user_id: string,
      setNotificationBadgeCount: Function,
      notificationBadgeCount: number,
      notificationData: notificationType[]
    }) => {
    try {
      let notifyIds: string[] = []
      notificationData.forEach(data => {
        if (!data.seen) {
          notifyIds.push(data?._id)
        }
      })
      console.log(notifyIds, "notifyIds")
      if (notifyIds.length) {
        let res = await axios.post(process.env.apiUrl + `/api/update-notification-seen`, { user_id: user_id, notifyIds: notifyIds })
        // setNotificationBadgeCount(notificationBadgeCount)
        let seenCount = notifyIds?.length;

        let badge = notificationBadgeCount - seenCount
        // setNotificationBadgeCount(badge)
        dispatch({ type: "SET_NOTIFICATION_BADGE_COUNT", payload: badge })





        // dispatch({type:"SET_NOTIFICATION_BADGE_COUNT", payload:res?.data?.nsCount})
      }

    }

    catch (error) {
      console.log(error)
    }

  }
}

const setEditedAvatarId: actionFunctionType = (dispatch) => {

  return async ({ id, router = null, path }) => {

    dispatch({ type: "SET_EDITED_AVATAR_ID", payload: id })


    if (router) {
      router.push(path)
    }
  }

}
const onRefreshAvatarList: actionFunctionType = (dispatch) => {

  return async ({ value }) => {

    dispatch({ type: "REFRESH_AVATARS", payload: value })

  }

}
const setIds: actionFunctionType = (dispatch) => {
  return async ({ id, action = "add" }) => {
    console.log(id, action, "in authcontext aaaaaa")
    try {
      dispatch({ type: "ALL_IDS", payload: { id, action } })
    } catch (error) {
      console.log(error);
    }
  };
};

const setCurrentQId: actionFunctionType = (dispatch) => {
  return async ({ id }) => {
    try {
      dispatch({ type: "SET_CURRENTQID", payload: { id } })
    } catch (error) {
      console.log(error);
    }
  };
};

// exporting all methods and setting initalState from here
const { Context, Provider } = createDataContext(
  AuthReducer,
  {
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signOut,

    updateUserProfile,
    updateUserData,
    fetchUpdatedProfileData,
    updateAvatarStagingDetails,
    setSignInStatus,
    setLoadingStatus,

    getNotifications,
    setNotificationSeen,
    setNotificationVisited,
    getChats,
    toggleSideBar,
    toggleSideSubMenu,





    getUnseenMessages,
    verifyCode,
    getMeets,
    getMeetInvites,
    getFriendList,
    onBackgroundMeet,
    setSingleMeetMessageNotSeen,
    // setNotificationBadgeCount ,
    setStagingSubscription,
    updateUserActivity,
    setSocket,
    setNotificationPerm,
    setNotificationData,
    setNotificationCount,
    setNotificationBadgeCount,
    setNotificationMessage,
    setEditedAvatarId,
    onRefreshAvatarList,
    setCurrentQId,
    setIds

    // setNotificationSeen
  },
  {
    userData: { _id: "", email: "", name: "", photo: "", token: "", signup_method: -1, gender: "", about: "", address: "" },
    getUserDetails: {},
    userToken: null,
    isLoading: true,
    isSignout: false,
    ads: [],
    profiles: [],
    allCategory: [],
    isSignIn: false,
    adBookmarks: [],
    adsCount: 0,
    myAds: [],
    otherAds: [],
    myAdsCount: 0,
    otherAdsCount: 0,
    ongoing: [],
    ongoingCount: 0,
    accepted: [],
    acceptedCount: 0,
    rejected: [],
    rejectedCount: 0,
    bestMatches: [],
    bestMatchesCount: 0,
    businessBookmarks: [],
    notifications: [],
    badgeCount: 0,
    notif_Count: 0,
    socket: null,
    notificationPerm: false,
    chats: [],
    all_nseen: {},
    message_notification: 0,
    total_chats: 0,
    block_list: [],
    isSubscribed: true,
    plan_id: 0,
    subscription_start: "",
    subscription_end: "",
    cancel_request: false,
    subscription_method: null,
    next_billing_time: null,
    subscription_id: null,
    isTrial: null,
    trial_start: null,
    trial_end: null,
    all_reviews: [],
    all_reviews_count: 0,
    ad_bookmark_count: 0,
    business_bm_count: 0,
    paypal_payment: false,
    notifCurrentDate: "",
    allMeets: [],
    allMeetCount: 0,
    allMeetInvites: [],
    allMeetInvitesCount: 0,
    friendList: [],
    friend_count: 0,
    meetTravelStart: false,
    destinationCord: null,
    meetName: "",
    meetId: null,
    LWPRef: null,
    currentLN: "",
    isMyMeet: false,
    meetDeleteCount: 0,
    updateMyMeet: false,
    updateMeetInvite: false,
    backgroundMeetData: {},
    allFriendCount: 0,
    isSideBarNavOpen: true,
    sideSubMenuDropDown: false,
    // stagingAvatarData:{avatar_file:null,avatar_speech:"",scene:{scene_id:"",order:0,title:"",max_zoom:10,min_zoom:1},tour_id:"",avatar_audio:"",avatar_speech_type:32,avatar_audio_file:null,avatarAnimation:{_id:"",name:"",animation:""}},
    avatar_list: ["65cb11e3c527add09f83d90e.glb", "6618cd4c994bba9ba8c9916b-female.glb", "6618cd4c994bba9ba8c9916b-male.glb", "6618d3c3a1fe9492d5b9eb75-boy.glb", "6630bfbd2daf46f6db098357-girl.glb"],
    staging_subscription: { price_id: "", plan_type_id: "", plan_id: "", plan_name: "", plan_price: "", plan_interval: "", address: "", state: "", country: "US" },
    userSubscriptionData: {
      user_id: "",
      plan_type_id: "",
      stripe_cus_id: "",
      plan_id: "",
      stripe_plan_id: "",
      isSubscribed: false,
      isTrial: false,
      subscription_id: "",
      subscription_method: -1,
      cancel_request: false,
      subscription_start: "",
      subscription_end: "",
      trial_start: "",
      trial_end: "",
      next_billing_time: "",
      subscriptionPlanName: "",
      interval: "",
    },
    notificationData: [],
    notificationCount: 0,
    notificationBadgeCount: 0,
    editedAvatarId: "",
    refreshAvatarList: false,
    allIds: [],
    currentQID: ""


  }
);

export { Provider, Context }
