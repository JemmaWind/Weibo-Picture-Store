/*
 * Copyright (c) 2018 The Weibo-Picture-Store Authors. All rights reserved.
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file.
 */

/**
 * @desc Canvas 画布宽或高的最大值
 */
export const MAXIMUM_EDGE = 2 ** 15 - 1;

/**
 * @desc 固定的标识符
 */
export const TRACKER_ID = "since-20170309";

/**
 * @desc StorageArea 用户数据同步用的事件名称
 */
export const T_DATA_CHANGED = "data_changed";

/**
 * @desc 固定的 64 位特征码
 * @desc 这个[不是]微博专用的
 */
export const WEIBO_ALBUM_ID = "ImUfrNWhuFTTOXASFgdCVVv2ZUIquXrKjqiey2r95Kqudh6sjaBUWFdcwtlGEX2w";

/**
 * @desc 子菜单的最大长度
 */
export const MAX_SUBMENU_LENGTH = 12;

/**
 * @desc StorageKey
 * @desc 存储 album_id
 */
export const SKEY_ALBUM_ID = "album_id";

/**
 * @desc StorageKey
 * @desc 存储上一次删除的 photo_id
 */
export const SKEY_REMOVED_PHOTO_ID = "removed_photo_id";

/**
 * @desc contextmenu id
 */
export const BATCH_DELETE_MENU_ID = "menu_batch_delete";
export const HISTORY_UPLOADED_MENU_ID = "menu_history_uploaded";
export const VIDEO_FRAME_MENU_ID = "menu_video_frame";
export const UPLOAD_IMAGE_MENU_ID = "menu_upload_image";
