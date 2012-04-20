
sub vbGetRenderRect(rect)
    dim screenX, screenY, width, height
	SCSG.teCore.IRender.GetRenderRect screenX, screenY, width, height
	rect.left   = screenX
	rect.top    = screenY
	rect.width  = width
	rect.height = height
end sub
sub vbPlaneGetPosition(pos)
    dim x,y,height,yaw,pitch,roll,cameraYaw,cameraPitch,flags
    
    flags = 4096
    if pos.heightType = sgHeightAbsolute then flags = 8192
    
    SCSG.teCore.IPlane.GetPositionEx x,y,height,yaw,pitch,roll,cameraYaw,cameraPitch,flags
    
    pos.x = x
    pos.y = y
    pos.height = height
    pos.yaw = yaw + cameraYaw
    pos.pitch = pitch + cameraPitch
end sub
function vbScreenToWorld(x,y,objType, coord3D)
    vbScreenToWorld = ""
    dim worldX,worldY,worldHeight,objID    
    SCSG.teCore.IRender.ScreenToWorld x, y, objType, worldX, worldHeight, worldY, objID    
    coord3D.x = worldX
    coord3D.y = worldY
    coord3D.height = worldHeight
    coord3D.heightType = sgHeightAbsolute
    if objType = sgPixelToWorldTypeSky then vbScreenToWorld = "sky" : exit function
    if objID <> "" then vbScreenToWorld = objID
end function

function vbWorldToScreen(WorldX, WorldY, WorldHeight, coord2D)
    dim screenX, screenY, inScreen, bPointInfronOfCamera
    bPointInfronOfCamera = SCSG.teCore.IRender.WorldToScreen(WorldX, WorldHeight, WorldY, screenX, screenY, 1, inScreen)
    if bPointInfronOfCamera = 0 then vbWorldToScreen = 0 : exit function     
    coord2D.x = screenX
    coord2D.y = screenY    
    if inScreen = 0 then vbWorldToScreen = 0 : exit function        
    vbWorldToScreen = 1
end function